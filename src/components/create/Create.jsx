import React, { useState, useEffect } from 'react';
import MetaTags from '../main/MetaTags';
import { Specie } from '../../model/Specie';
import { storage, dataBase } from '../../firebase/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc, updateDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import SpecieForm from '../main/SpecieForm';
import Navbar from '../../elements/Navbar';
import { Container } from 'react-bootstrap';

/**
 * Create es un componente de React que se encarga de gestionar la creación de
 * nuevos registros de especie, enviando la información a la base de datos.
 * 
 * @returns Retorna principalmente el componente de formulario para las 
 * especies y elementos de navegación.
 */
const Create = () => {
    const [specie, setSpecie] = useState(new Specie());
    const [images, setImages] = useState({});
    const [sound, setSound] = useState({});
    const [soundUrl, setSoundUrl] = useState("");
    const [imageUrls, setImageUrls] = useState([]);

    /**
     * Se implento el hook de useEffect para identificar el momento en que se
     * cargaron los recursos multimedia (Imagenes y sonidos) para luego enviar
     * la información de la especie a la base de datos incluyendo los enlaces 
     * de descargade los recursos mencionados.
     */
    useEffect(() => {
        /**
         * uploadToDB es la función encargada de crear el registro en la base de datos
         * posterior a que se carga la información de la especie se realiza una actualización
         * en el registro agregando en el mismo registro el id que le asigna firebase
         * al momento de crearlo
         */
        const uploadToDB = async () => {
            const docRef = await addDoc(
                collection(dataBase, "species"),
                specie.toJson()
            );

            updateDoc(docRef, {
                id: docRef.id
            })
            alert("The doc was added");
            clearForm();
        }

        if (images.length === imageUrls.length && images.length > 0) {
            if (sound.length > 0) {
                if (soundUrl.length > 0) {
                    let specieAux = specie;
                    specieAux.images = imageUrls;
                    specieAux.sound = soundUrl;
                    setSpecie(specieAux)
                    uploadToDB(specie.toJson());
                }
            } else {
                let specieAux = specie;
                specieAux.images = imageUrls;
                setSpecie(specieAux)
                uploadToDB(specie.toJson());
            }
        }
        return () => {
        }
    }, [imageUrls, images, sound, soundUrl, specie])

    /**
     * Se encarga invocar la carga de las imagenes y la carga del sonido
     */
    const createSpecies = () => {
        uploadFiles(images, 'image/jpeg', 'images');
        if (sound.length > 0){
            uploadFiles(sound, 'audio/mpeg', 'sound')
        }
    }

    /**
     * Realiza la carga de las archivos hacia el servicio de almacenamiento de firebase
     * 
     * @param {File[]} files conjunto de archivos a cargar
     * @param {string} fileType tipo de archivo multimedia (audio/mpeg o image/jpeg)
     * @param {string} folder ruta en la que se almacenará en firebase storage
     */
    const uploadFiles= async (files, fileType, folder) => {
        const metadata = {
            contentType: fileType
        };

        const extension = fileType === 'image/jpeg'? '.jpg': '.mp3';

        for (let i = 0; i < files.length; i++) {
            const storageRef = ref(storage, folder + '/' + uuidv4() + extension);
            const uploadTask = uploadBytesResumable(storageRef, files[i], metadata);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (progress === 100) alert("The file was uploaded")
                },
                (error) => {
                    if (error.code === 'storage/unauthorized') {
                        alert("Usuario invalido, por favor realice el inicio de sesión")
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        if(fileType === 'image/jpeg'){
                            setImageUrls(elements => [...elements, downloadURL])
                        }else if(fileType === 'audio/mpeg'){
                            setSoundUrl(downloadURL);
                        }
                    });
                }
            );
        }

    }

    /**
     * Regresa los elementos del formulario a su estado inicial, disponible para una nueva creación
     */
    const clearForm = () => {
        setSound("");
        setImages({});
        setImageUrls([]);
        setSoundUrl("");
        document.querySelector('#inpt-sound-species').value = "";
        document.querySelector('#inpt-images-species').value = "";
    }

    return (
        <>
            <MetaTags title='Agregar Especie | FDC'/>
            <Navbar brand='FDC' title= 'Administrador | FDC' full={false}/>
            <Container className='py-3'>
                <NavLink to={'/'} className='text-decoration-none'>Volver al inicio</NavLink>
                <h2><b>Agregar especie</b></h2>
                <SpecieForm
                    setSpecie={setSpecie}
                    createSpecies={createSpecies}
                    images={images}
                    setImages={setImages}
                    sound={sound}
                    setSound={setSound}
                />
            </Container>
        </>
    );
}

export default Create;
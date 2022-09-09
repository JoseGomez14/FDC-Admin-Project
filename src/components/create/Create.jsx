import React, { useState, useEffect } from 'react';
import { Specie } from '../../model/Specie';
import { storage, dataBase } from '../../firebase/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { uuidv4 } from '@firebase/util';
import { collection, addDoc, updateDoc} from 'firebase/firestore'; 
import { NavLink } from 'react-router-dom';
import SpecieForm from '../SpecieForm';

const Create = () => {
    const [specie, setSpecie] = useState(new Specie());
    const [images, setImages] = useState({});
    const [sound, setSound] = useState({});
    const [soundUrl, setSoundUrl] = useState("");
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const uploadToDB = async ()=>{
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
            if(sound.length > 0){
                if(soundUrl.length > 0){
                    let specieAux = specie;
                    specieAux.images = imageUrls;
                    specieAux.sound = soundUrl;
                    setSpecie(specieAux)
                    uploadToDB(specie.toJson());
                }
            }else{
                let specieAux = specie;
                specieAux.images = imageUrls;
                setSpecie(specieAux)
                uploadToDB(specie.toJson());
            }
        }
        return () => {
        }
    }, [imageUrls, images, sound, soundUrl, specie])
    

    const createSpecies = () => {
        if (images.length <= 4 && images.length >= 1) {
            if(verifyImageSize(images)){
                uploadImages();
            }
        } else {
            alert("El número máximo de imagenes es 4 y el mínimo es 1")
        }
    }

    const uploadImages = async () => {
        const metadata = {
            contentType: 'image/jpeg'
        };
        
        for (let i = 0; i < images.length; i++) {
            const storageRef = ref(storage, 'images/' + uuidv4() + '.jpg');
            const uploadTask = uploadBytesResumable(storageRef, images[i], metadata);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if(progress === 100) alert("The image " + i + " was uploaded")
                },
                (error) => {
                    if(error.code === 'storage/unauthorized'){
                        alert("Usuario invalido, por favor realice el inicio de sesión")
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageUrls(elements => [...elements, downloadURL])
                    });
                }
            );
        }

        if (sound.length > 0) uploadSound()
    }

    const uploadSound = async () => {
        const storageRef = ref(storage, 'sounds/' + uuidv4() + '.mp3');
        const uploadTask = uploadBytesResumable(storageRef, sound[0], {contentType: 'audio/mpeg'});

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if(progress === 100) alert("The sound was uploaded")
            },
            (error) => {
                if(error.code === 'storage/unauthorized'){
                    alert("Usuario invalido, por favor realice el inicio de sesión");
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setSoundUrl(downloadURL);
                });
            }
        );
    }

    const verifyImageSize = (files) => {
        for (let i = 0; i < files.length; i++) {
            if(files[i].size > 2000000){
                alert('El tamaño de cada imagen no debe superar los 2 MB');
                return false;
            }
        }
        return true;
    }

    const clearForm = () =>{
        setSound("");
        setImages({});
        setImageUrls([]);
        setSoundUrl("");
        document.querySelector('#inpt-sound-species').value = "";
        document.querySelector('#inpt-images-species').value = "";
    }

    return (
        <>
            <h1>Agregar una especie</h1>
            <NavLink to={'/'}>Volver al inicio</NavLink>
            <SpecieForm
                setSpecie={setSpecie}
                createSpecies={createSpecies}
                images={images}
                setImages={setImages}
                sound={sound}
                setSound={setSound}
            />
        </>
    );
}

export default Create;
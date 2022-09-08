import React, { useState, useEffect } from 'react';
import { Species } from '../../model/Species';
import { storage, dataBase } from '../../firebase/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { uuidv4 } from '@firebase/util';
import { collection, addDoc, updateDoc} from 'firebase/firestore'; 

const Create = () => {
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [images, setImages] = useState({});
    const [sound, setSound] = useState({});
    const [soundUrl, setSoundUrl] = useState("");
    const [imageUrls, setImageUrls] = useState([]);
    const [stateForm, setStateForm] = useState(true);

    useEffect(() => {
        if (images.length === imageUrls.length && images.length > 0) {
            if(sound.length > 0){
                if(soundUrl.length > 0){
                    let species = new Species(commonName, scientificName, imageUrls, soundUrl);
                    uploadToDB(species.toJson());
                }
            }else{
                let species = new Species(commonName, scientificName, imageUrls, soundUrl);
                uploadToDB(species.toJson());
            }
        }
        return () => {
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [commonName, imageUrls, images.length, scientificName, sound.length, soundUrl])
    

    const createSpecies = (evt) => {
        evt.preventDefault();
        if (images.length <= 4 && images.length >= 1) {
            if(verifyImageSize(images)){
                setStateForm(false);
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
        setStateForm(true);
        setCommonName("");
        setScientificName("");
        setSound("");
        setImages({});
        setImageUrls([]);
        setSoundUrl("");
        document.querySelector('#inpt-sound-species').value = "";
        document.querySelector('#inpt-images-species').value = "";
    }

    const uploadToDB = async (species)=>{
        const docRef = await addDoc(
            collection(dataBase, "species"), 
            species
        );

        updateDoc(docRef, {
            id: docRef.id
        })
        alert("The doc was added");
        clearForm();
    }

    return (
        <>
            <h1>Agregar una especie</h1>
            <form onSubmit={createSpecies}>
                <label htmlFor="">
                    Nombre de la especie<br />
                    <input
                        type="text"
                        placeholder='Nombre de la especie'
                        pattern="[a-zA-ZÀ-ÿ\s]{1,40}" title="El nombre debe tener entre 1 y 40 caracteres"
                        disabled={!stateForm}
                        value={commonName}
                        onChange={(evt) => setCommonName(evt.target.value)} />
                </label><br />

                <label htmlFor="">
                    <br />Nombre científico de la especie<br />
                    <input
                        type="text"
                        placeholder='Nombre científico de la especie'
                        pattern="[a-zA-ZÀ-ÿ\s]{1,40}" title="El nombre debe tener entre 1 y 40 caracteres"
                        disabled={!stateForm}
                        value={scientificName}
                        onChange={(evt) => setScientificName(evt.target.value)} />
                </label><br />

                <label htmlFor="inpt-images-species">
                    <br />Fotografía de la especie<br />
                    <input
                        type="file"
                        name="inpt-images-species"
                        id="inpt-images-species"
                        multiple
                        disabled={!stateForm}
                        accept='.jpg, .jpeg, .png'
                        onChange={(evt) => setImages(evt.target.files)} />
                </label><br />

                <label htmlFor="inpt-sound-species">
                    <br />Registro de sonido de la especie<br />
                    <input
                        type="file"
                        name="inpt-sound-species"
                        id="inpt-sound-species"
                        disabled={!stateForm}
                        accept='.mp3'
                        onChange={(evt) => setSound(evt.target.files)} />
                </label><br /><br />

                <button type="submit" disabled={!stateForm}>Agregar</button>
            </form>
        </>
    );
}

export default Create;
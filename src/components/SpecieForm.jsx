import React, { useState, useEffect } from 'react';
import updateSpecie from '../firebase/updateSpecie'
import { Specie } from '../model/Specie'

const SpecieForm = ({ specie, id, setSpecie, createSpecies, images, setImages, sound, setSound }) => {
    const [formState, setFormState] = useState(true);
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [soundUrl, setSoundUrl] = useState("");
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        if (specie) {
            setCommonName(specie.commonName);
            setScientificName(specie.scientificName)
            setSoundUrl(specie.sound)
            setImageUrls(specie.images);
        }

        return ()=>{
            if(images){
                if(images.length === 0){
                    setFormState(true);
                }
            }
        }

    }, [images, specie])

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setFormState(false);
        if (specie) {
            await updateSpecie(id,
                new Specie(
                    commonName,
                    scientificName,
                    imageUrls,
                    soundUrl
                )
            );
            setFormState(true);
        } else {
            setSpecie(new Specie(commonName, scientificName, images, sound))
            await createSpecies();
            setCommonName('')
            setScientificName('')
        }
    }

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="">
            Nombre de la especie<br />
            <input
                type="text"
                id="inpt-common-name-species"
                placeholder='Nombre de la especie'
                pattern="[a-zA-ZÀ-ÿ\s]{1,40}" title="El nombre debe tener entre 1 y 40 caracteres"
                disabled={!formState}
                value={commonName}
                onChange={(evt) => setCommonName(evt.target.value)} />
        </label><br />

        <label htmlFor="">
            <br />Nombre científico de la especie<br />
            <input
                type="text"
                id="inpt-scientific-name-species"
                placeholder='Nombre científico de la especie'
                pattern="[a-zA-ZÀ-ÿ\s]{1,40}" title="El nombre debe tener entre 1 y 40 caracteres"
                disabled={!formState}
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
                disabled={!formState}
                accept='.jpg, .jpeg, .png'
                onChange={(evt) => setImages(evt.target.files)} />
        </label><br />

        <label htmlFor="inpt-sound-species">
            <br />Registro de sonido de la especie<br />
            <input
                type="file"
                name="inpt-sound-species"
                id="inpt-sound-species"
                disabled={!formState}
                accept='.mp3'
                onChange={(evt) => setSound(evt.target.files)} />
        </label><br /><br />

        <button
            type="submit"
            disabled={!formState}
        >{specie ? 'Editar' : 'Agregar'}
        </button>
    </form>
    );
}

export default SpecieForm;
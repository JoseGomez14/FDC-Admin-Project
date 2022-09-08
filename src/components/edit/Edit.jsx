import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import useGetSpecie from '../../hooks/useGetSpecie';
import { Specie } from '../../model/Specie';
import useUpdateSpecie from '../../firebase/updateSpecie';
import useDeleteSpecie from '../../firebase/deleteSpecie';

const Edit = () => {
    const { id } = useParams();
    const [updateSpecies, formState] = useUpdateSpecie()
    const [specie, docState] = useGetSpecie(id);
    const [deleteSpecie] = useDeleteSpecie();
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [soundUrl, setSoundUrl] = useState("");
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const loadData = (data) => {
            setCommonName(data.commonName);
            setScientificName(data.scientificName);
            setSoundUrl(data.images);
            setImageUrls(data.sound);
        }
        
        loadData(specie);
    }, [specie])

    const handleUpdate = (evt)=>{
        evt.preventDefault();
        updateSpecies(id, new Specie(commonName, scientificName, imageUrls, soundUrl))
    }

    const handleDelete = ()=>{
        if (window.confirm("¿Está seguro de eliminar el registro?")) {
            deleteSpecie(id)   
        }
    }

    return (
        <>
            <h1>Editar una especie</h1>
            <NavLink to={'/'}>Volver al inicio</NavLink>
            {docState === 'load' && <h1>Cargando...</h1>}
            {docState === 'empty' && <h1>La especie no se ha encontrado, ingresa a ...</h1>}
            {docState === 'exists' &&
                <div>
                    <p>Id de especie: {id}</p>
                    <form onSubmit={handleUpdate}>
                        <label htmlFor="">
                            Nombre de la especie<br />
                            <input
                                type="text"
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
                                placeholder='Nombre científico de la especie'
                                pattern="[a-zA-ZÀ-ÿ\s]{1,40}" title="El nombre debe tener entre 1 y 40 caracteres"
                                disabled={!formState}
                                value={scientificName}
                                onChange={(evt) => setScientificName(evt.target.value)} />
                        </label><br />

                        <label htmlFor="">
                            <br />Fotografía de la especie<br />
                            <input
                                type="file"
                                name=""
                                id=""
                                disabled={!formState} />
                        </label><br />

                        <label htmlFor="">
                            <br />Registro de sonido de la especie<br />
                            <input
                                type="file"
                                name=""
                                id=""
                                disabled={!formState} />
                        </label><br /><br />

                        <button type="submit">Editar</button>
                    </form>
                    <button onClick={handleDelete}>Eliminar</button>
                </div>
            }
        </>
    );
}

export default Edit;
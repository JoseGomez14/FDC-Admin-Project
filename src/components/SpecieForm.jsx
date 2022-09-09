import React, { useState, useEffect } from 'react';
import updateSpecie from '../firebase/updateSpecie'
import { Specie } from '../model/Specie'
import Form from '../elements/Form';

/**
 * Este componente de react se encarga de gestionar el formulario que se usa tanto para crear
 * una nueva espcie como para editarla dado que en ambos casos se requiere la misma información
 * 
 * @param {*} specie En caso de Edit se pasa una specie que contiene la información que ya está registrada
 * @param {*} id el id que se tiene en firebase si está especie ya existe
 * @param {*} setSpecie función de cambio de estado para modificar la especie
 * @param {*} createSpecies función para ejecucar la creación de una nueva especie
 * @param {*} images conjunto de imagenes que el usuario selecciona
 * @param {*} setImages función para modificar las imagenes sellecionadas
 * @param {*} sound sonido que el usuario selecciona
 * @param {*} setSound función para modificar el sonido seleccionado
 * @returns Un elemento que es un formulario con los campos para crear y modificar una espcie
 */
const SpecieForm = ({ specie, id, setSpecie, createSpecies, images, setImages, sound, setSound }) => {
    const [formState, setFormState] = useState(true);
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [soundUrl, setSoundUrl] = useState("");
    const [imageUrls, setImageUrls] = useState([]);

    /**
     * Se hace uso de hook useEffect para cargar la información al formulario en caso
     * de que la especie ya exista y el caso de uso se Edit y gestiona el estado del formulario
     * cuando realizamos un submit para dejarlo inactivo mientras se procesa la solicitud
     */
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

    /**
     * Esta función se encarga de realizar la operciones de actualización de información o creación
     * de espceie según sea el caso.
     * 
     * @param {*} evt información asociada al evento ocurrido
     */
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (specie) {
            setFormState(false);
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
            if(images){
                if (images.length >= 1 && images.length <= 4) {
                    if (verifyImageSize(images)) {
                        setFormState(false);
                        setSpecie(new Specie(commonName, scientificName, images, sound));
                        await createSpecies();
                        setCommonName('');
                        setScientificName('');
                    }
                }else{
                    alert("El número máximo de imagenes es 4 y el mínimo es 1");
                }
            }
        }
    }

    /**
     * Verifica que el tamaño de cada una de la imagenes cargadas no supere 2MB
     * @param {File[]} files es el arreglo de imagenes a verificar
     * @returns retorna true si todas las imagenes tienen un tamaño inferior a 2MB
     */
     const verifyImageSize = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (files[i].size > 2000000) {
                alert('El tamaño de cada imagen no debe superar los 2 MB');
                return false;
            }
        }
        return true;
    }

    return (
        <Form
            handleSubmit={handleSubmit}
            formState={formState}
            specie={specie}
            commonName={commonName}
            setCommonName={setCommonName}
            scientificName={scientificName}
            setScientificName={setScientificName}
            setImages={setImages}
            setSound={setSound}
        ></Form>
    );
}

export default SpecieForm;
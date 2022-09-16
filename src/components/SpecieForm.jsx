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
const SpecieForm = ({ specie, id, setSpecie, createSpecies, images, setImages, sound, setSound, handleDelete }) => {
    
    const [formState, setFormState] = useState(true);
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [genus, setGenus] = useState("");
    const [className, setClassName] = useState("Aves");
    const [description, setDescription] = useState("");
    const [mapUrl, setMapUrl] = useState("");
    const [extincion, setExtincion] = useState(false);
    const [color, setColor] = useState("Blanco");
    const [size, setSize] = useState(0);
    const [food, setFood] = useState("");
    const [habitat, setHabitat] = useState("Pradera");
    const [kingdom, setKingdom] = useState("Fauna");
    const [srcSound, setSrcSound] = useState("");
    const [soundUrl, setSoundUrl] = useState("");
    const [imageUrls, setImageUrls] = useState([]);
    const [inaturalistUrl, setInaturalistUrl] = useState("");

    /**
     * Se hace uso de hook useEffect para cargar la información al formulario en caso
     * de que la especie ya exista y el caso de uso se Edit y gestiona el estado del formulario
     * cuando realizamos un submit para dejarlo inactivo mientras se procesa la solicitud
     */
    useEffect(() => {
        if (specie) {
            setCommonName(specie.commonName);
            setScientificName(specie.scientificName);
            setGenus(specie.genus);
            setClassName(specie.className);
            setDescription(specie.description);
            setMapUrl(specie.mapUrl);
            setExtincion(specie.state);
            setColor(specie.skinColor);
            setSize(specie.size);
            setFood(specie.food);
            setHabitat(specie.habitat);
            setKingdom(specie.kingdom);
            setSoundUrl(specie.sound);
            setImageUrls(specie.images);
            setSrcSound(specie.srcSound);
            setInaturalistUrl(specie.inaturalistUrl);
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
                new Specie(commonName, scientificName, kingdom, className, genus,
                    description, habitat, extincion, mapUrl, color, size,
                    food, imageUrls, soundUrl, srcSound, inaturalistUrl)
            );
            setFormState(true);
        } else {
            if(images){
                if (images.length >= 1 && images.length <= 4) {
                    if (verifyImageSize(images)) {
                        setFormState(false);
                        setSpecie(new Specie(commonName, scientificName, kingdom, className, genus,
                            description, habitat, extincion, mapUrl, color, size,
                            food, images, soundUrl, srcSound, inaturalistUrl));
                        await createSpecies();
                        clearForm();
                    }
                }else{
                    alert("El número máximo de imagenes es 4 y el mínimo es 1");
                }
            }
        }
    }

    /**
     * Permite restablecer el formulario a su estado inicial
     */
    const clearForm = ()=>{
        setCommonName('');
        setScientificName('');
        setGenus('')
        setClassName('Aves');
        setDescription('');
        setMapUrl('');
        setExtincion(false);
        setColor('Blanco');
        setSize(0);
        setFood('');
        setHabitat('Pradera');
        setKingdom('Fauna');
        setSrcSound('');
        setInaturalistUrl('');
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
            handleDelete={handleDelete}
            commonName={commonName}
            setCommonName={setCommonName}
            scientificName={scientificName}
            setScientificName={setScientificName}
            genus={genus}
            setGenus={setGenus}
            className={className}
            setClassName={setClassName}
            description={description}
            setDescription={setDescription}
            mapUrl={mapUrl}
            setMapUrl={setMapUrl}
            extincion={extincion}
            setExtincion={setExtincion}
            color={color}
            setColor={setColor}
            size={size}
            setSize={setSize}
            food={food}
            setFood={setFood}
            habitat={habitat}
            setHabitat={setHabitat}
            kingdom={kingdom}
            setKingdom={setKingdom}
            srcSound={srcSound}
            setSrcSound={setSrcSound}
            setImages={setImages}
            setSound={setSound}
            inaturalistUrl={inaturalistUrl}
            setInaturalistUrl={setInaturalistUrl}
        ></Form>
    );
}

export default SpecieForm;
/**
 * Este componente es el formulario en HTML que contiene los campos necesarios para crear
 * o modificar una especie.
 * 
 * @param {*} props contiente la información de los modificares de estado para ir actualizando la información
 * en el momento que se va modificando en los inputs
 * @returns 
 */
const Form = (props) => {
    const handleTypeSubmit = (evt) =>{
        if(evt.target.id === 'inpt-type-fauna' ){
            props.setKingdom("Fauna");
        }else{
            props.setKingdom("Flora");
        }
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <fieldset>
                <legend>Taxonomía</legend>
                <label htmlFor="inpt-common-name-species">Nombre común</label><br />
                <input
                    type="text" required
                    id="inpt-common-name-species"
                    placeholder="Nombre de la especie"
                    pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                    title="El nombre debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                    disabled={!props.formState}
                    value={props.commonName}
                    onChange={(evt) => props.setCommonName(evt.target.value)} />

                <label htmlFor="inpt-scientific-name-species">Nombre científico</label>
                <input
                    type="text" required
                    id="inpt-scientific-name-species"
                    placeholder="Nombre científico de la especie"
                    pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                    title="El nombre debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                    disabled={!props.formState}
                    value={props.scientificName}
                    onChange={(evt) => props.setScientificName(evt.target.value)} />
                
                <label htmlFor="inpt-genus-species">Género</label>
                <input
                    type="text" required
                    id="inpt-genus-species"
                    placeholder="Género de la especie"
                    pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                    title="El género debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                    disabled={!props.formState}
                    value={props.genus}
                    onChange={(evt) => props.setGenus(evt.target.value)} />
                
                <label htmlFor="inpt-class-species">Clase</label>
                <select 
                    id="inpt-class-species" required
                    disabled={!props.formState}
                    value={props.className}
                    onChange={(evt) => props.setClassName(evt.target.value)}>
                    <option value='Aves'>Aves</option>
                    <option value='Mamíferos'>Mamíferos</option>
                    <option value='Reptiles'>Reptiles</option>
                    <option value='Anfibios'>Anfibios</option>
                    <option value='Insectos'>Insectos</option>
                    <option value='Plantas'>Plantas</option>
                    <option value='Hongos'>Hongos</option>
                </select>
            </fieldset>

            <fieldset>
                <legend>Información</legend>
                <label htmlFor="inpt-description-species">Descripción</label>
                <input
                    type="text" required
                    id="inpt-description-species"
                    placeholder="Descripción general de la especie"
                    pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                    title="La descripción debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                    disabled={!props.formState}
                    value={props.description}
                    onChange={(evt) => props.setDescription(evt.target.value)} />
                
                <label htmlFor="inpt-url-map-species">Url de ubicación del registro</label>
                <input
                    type="url"
                    id="inpt-url-map-species"
                    placeholder="Ubicación del registro (Url Google Maps)"
                    disabled={!props.formState}
                    value={props.mapUrl}
                    onChange={(evt) => props.setMapUrl(evt.target.value)} />
                
                <label htmlFor="inpt-extinction-species">Especie en vía de extinción</label>
                <input 
                    type="checkbox"
                    id="inpt-extinction-species"
                    disabled={!props.formState}
                    checked={props.extincion}
                    onChange={(evt) => props.setExtincion(evt.target.checked)}/>

                <label htmlFor="inpt-color-species">Color del pelaje</label>
                <select 
                    id="inpt-color-species" required
                    disabled={!props.formState}
                    value={props.color}
                    onChange={(evt) => props.setColor(evt.target.value)}>
                    <option value='Negro'>Negro</option>
                    <option value='Blanco'>Blanco</option>
                    <option value='Azul'>Azul</option>
                    <option value='Verde'>Verde</option>
                    <option value='Rojo'>Rojo</option>
                    <option value='Amarillo'>Amarillo</option>
                    <option value='Rosa'>Rosa</option>
                    <option value='Anaranjado'>Anaranjado</option>
                    <option value='Morado'>Morado</option>
                    <option value='Café'>Café</option>
                    <option value='Gris'>Gris</option>
                </select>

                <label htmlFor="inpt-size-species">Tamaño aprox. en centímetros</label>
                <input
                    type="number"
                    min={0}
                    id="inpt-size-species"
                    placeholder="Tamaño aprox. en centímetros"
                    disabled={!props.formState}
                    value={props.size}
                    onChange={(evt) => props.setSize(evt.target.value)} />

                <label htmlFor="inpt-food-species">Alimentos</label>
                <input
                    type="text"
                    id="inpt-food-species"
                    placeholder="Alimentos de la especie"
                    disabled={!props.formState}
                    value={props.food}
                    onChange={(evt) => props.setFood(evt.target.value)} />

                <label htmlFor="inpt-habitat-species">Hábitat</label>
                <select 
                    id="inpt-habitat-species"
                    disabled={!props.formState}
                    value={props.habitat}
                    onChange={(evt) => props.setHabitat(evt.target.value)}>
                    <option value='Pradera'>Pradera</option>
                    <option value='Bosque'>Bosque</option>
                    <option value='Desierto'>Desierto</option>
                    <option value='Montaña'>Montaña</option>
                    <option value='Marisma'>Marisma</option>
                    <option value='Sabana'>Sabana</option>
                    <option value='Altiplano'>Altiplano</option>
                    <option value='Quebrada'>Quebrada</option>
                    <option value='Lago'>Lago</option>
                    <option value='Pantano'>Pantano</option>
                    <option value='Río'>Río</option>
                    <option value='Playa'>Playa</option>
                </select>
            </fieldset>

            {props.kingdom === 'Fauna'?
                <fieldset>
                    <legend>Reino</legend>
                    <label htmlFor="inpt-type-fauna">Fauna</label>
                    <input type="radio" name="inpt-type" 
                        id="inpt-type-fauna" defaultChecked
                        disabled={!props.formState}
                        onChange={handleTypeSubmit}/>
    
                    <label htmlFor="inpt-type-flora">Flora</label>
                    <input type="radio" name="inpt-type"
                        id="inpt-type-flora"
                        disabled={!props.formState}
                        onChange={handleTypeSubmit}/>
                    
                </fieldset>
                :
                <fieldset>
                    <legend>Reino</legend>
                    <label htmlFor="inpt-type-fauna">Fauna</label>
                    <input type="radio" name="inpt-type" 
                        id="inpt-type-fauna"
                        disabled={!props.formState}
                        onChange={handleTypeSubmit}/>
    
                    <label htmlFor="inpt-type-flora">Flora</label>
                    <input type="radio" name="inpt-type"
                        id="inpt-type-flora" defaultChecked
                        disabled={!props.formState}
                        onChange={handleTypeSubmit}/>
                </fieldset>
            }

            <fieldset>
                <legend>Imágenes</legend>
                <label htmlFor="inpt-images-species">Registros fotográficos</label>
                <input
                    type="file"
                    name="inpt-images-species"
                    id="inpt-images-species"
                    multiple
                    disabled={!props.formState}
                    accept='.jpg, .jpeg, .png'
                    onChange={(evt) => props.setImages(evt.target.files)} />
            </fieldset>

            <fieldset>
                <legend>Sonido</legend>
                <label htmlFor="inpt-sound-species">Registro de sonido</label>    
                <input
                    type="file"
                    name="inpt-sound-species"
                    id="inpt-sound-species"
                    disabled={!props.formState}
                    accept='.mp3'
                    onChange={(evt) => props.setSound(evt.target.files)} />
                
                <label htmlFor="inpt-src-sound-species">Fuente del sonido</label>
                <input
                    type="text"
                    id="inpt-src-sound-species"
                    placeholder="Fuente del sonido"
                    disabled={!props.formState}
                    value={props.srcSound}
                    onChange={(evt) => props.setSrcSound(evt.target.value)}
                    />
            </fieldset>

            <button
                type="submit"
                disabled={!props.formState}
            >{props.specie ? 'Editar' : 'Agregar'}
            </button>
        </form>
    );
}

export default Form;
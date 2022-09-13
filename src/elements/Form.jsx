/**
 * Este componente es el formulario en HTML que contiene los campos necesarios para crear
 * o modificar una especie.
 * 
 * @param {*} props contiente la información de los modificares de estado para ir actualizando la información
 * en el momento que se va modificando en los inputs
 * @returns 
 */
const Form = (props) => {
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
                    title="El nombre debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                    disabled={!props.formState}
                    value={''}
                    onChange={''} />
                
                <label htmlFor="inpt-class-species">Clase</label>
                <select 
                    id="inpt-class-species" required
                    disabled={!props.formState}>
                    <option value='aves'>Aves</option>
                    <option value='mamiferos'>Mamíferos</option>
                    <option value='reptiles'>Reptiles</option>
                    <option value='anfibios'>Anfibios</option>
                    <option value='insectos'>Insectos</option>
                    <option value='plantas'>Plantas</option>
                    <option value='hongos'>Hongos</option>
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
                    title="El nombre debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                    disabled={!props.formState}
                    value={''}
                    onChange={''} />
                
                <label htmlFor="inpt-url-map-species">Url de ubicación del registro</label>
                <input
                    type="url"
                    id="inpt-url-map-species"
                    placeholder="Ubicación del registro"
                    disabled={!props.formState}
                    value={''}
                    onChange={''} />
                
                <label htmlFor="inpt-extinction-species">Especie en vía de extinción</label>
                <input 
                    type="checkbox"
                    id="inpt-extinction-species"
                    disabled={!props.formState}/>
            </fieldset>

            <fieldset>
                <legend>Reino</legend>
                <label htmlFor="inpt-type-fauna">Fauna</label>
                <input type="radio" name="inpt-type" id="inpt-type-fauna" checked='true' />

                <label htmlFor="inpt-type-flora">Flora</label>
                <input type="radio" name="inpt-type" id="inpt-type-flora" />
            </fieldset>

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
                    value={''}
                    onChange={''} />
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
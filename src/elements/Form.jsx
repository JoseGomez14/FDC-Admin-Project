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
        <label htmlFor="">
            Nombre de la especie<br />
            <input
                type="text" required
                id="inpt-common-name-species"
                placeholder="Nombre de la especie"
                pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                title="El nombre debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                disabled={!props.formState}
                value={props.commonName}
                onChange={(evt) => props.setCommonName(evt.target.value)} />
        </label><br />

        <label htmlFor="">
            <br />Nombre científico de la especie<br />
            <input
                type="text" required
                id="inpt-scientific-name-species"
                placeholder="Nombre científico de la especie"
                pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                title="El nombre debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                disabled={!props.formState}
                value={props.scientificName}
                onChange={(evt) => props.setScientificName(evt.target.value)} />
        </label><br />

        <label htmlFor="inpt-images-species">
            <br />Fotografía de la especie<br />
            <input
                type="file"
                name="inpt-images-species"
                id="inpt-images-species"
                multiple
                disabled={!props.formState}
                accept='.jpg, .jpeg, .png'
                onChange={(evt) => props.setImages(evt.target.files)} />
        </label><br />

        <label htmlFor="inpt-sound-species">
            <br />Registro de sonido de la especie<br />
            <input
                type="file"
                name="inpt-sound-species"
                id="inpt-sound-species"
                disabled={!props.formState}
                accept='.mp3'
                onChange={(evt) => props.setSound(evt.target.files)} />
        </label><br /><br />

        <button
            type="submit"
            disabled={!props.formState}
        >{props.specie ? 'Editar' : 'Agregar'}
        </button>
    </form>
     );
}
 
export default Form;
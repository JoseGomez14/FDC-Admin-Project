import { Button, Form as FormB, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

/**
 * Este componente es el formulario en HTML que contiene los campos necesarios para crear
 * o modificar una especie.
 * 
 * @param {*} props contiente la información de los modificares de estado para ir actualizando la información
 * en el momento que se va modificando en los inputs
 */
const Form = (props) => {
    return (
        <FormB onSubmit={props.handleSubmit}>
            <FormB.Group>
                <legend className="mt-2 fw-semibold">Taxonomía</legend>
                <Row xs={1} sm={2} lg={3}>
                    <Col>
                        <FormB.Label htmlFor="inpt-common-name-species">Nombre común *</FormB.Label><br />
                        <FormB.Control
                            type="text" required
                            id="inpt-common-name-species"
                            className="mb-3"
                            placeholder="Nombre de la especie"
                            pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                            title="El nombre debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                            disabled={!props.formState}
                            value={props.commonName}
                            onChange={(evt) => props.setCommonName(evt.target.value)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-scientific-name-species">Nombre científico *</FormB.Label>
                        <FormB.Control
                            type="text" required
                            id="inpt-scientific-name-species"
                            className="mb-3"
                            placeholder="Nombre científico de la especie"
                            pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                            title="El nombre debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                            disabled={!props.formState}
                            value={props.scientificName}
                            onChange={(evt) => props.setScientificName(evt.target.value)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-kingdom-species">Reino *</FormB.Label>
                        <FormB.Select
                            id="inpt-kingdom-species" required
                            className="mb-3"
                            disabled={!props.formState}
                            value={props.kingdom}
                            onChange={(evt) => props.setKingdom(evt.target.value)}>
                            <option value=''>-- Seleciona un reino --</option>
                            <option value='Animalia'>Animalia</option>
                            <option value='Plantae'>Plantae</option>
                            <option value='Fungi'>Fungi</option>
                        </FormB.Select>
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-phylum-species">Filo *</FormB.Label>
                        <FormB.Control
                            type="text" required
                            id="inpt-phylum-species"
                            className="mb-3"
                            placeholder="Filo de la especie"
                            pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                            title="El campo debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                            disabled={!props.formState}
                            value={props.phylum}
                            onChange={(evt) => props.setPhylum(evt.target.value)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-subphylum-species">Subfilo</FormB.Label>
                        <FormB.Control
                            type="text"
                            id="inpt-subphylum-species"
                            className="mb-3"
                            placeholder="Subfilo de la especie"
                            pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                            title="El campo debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                            disabled={!props.formState}
                            value={props.subphylum}
                            onChange={(evt) => props.setSubphylum(evt.target.value)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-class-species">Clase *</FormB.Label>
                        <FormB.Select
                            id="inpt-class-species" required
                            className="mb-3"
                            disabled={!props.formState}
                            value={props.className}
                            onChange={(evt) => props.setClassName(evt.target.value)}>
                            <option value=''>-- Selecciona una clase --</option>
                            <option value='Aves'>Aves</option>
                            <option value='Mamíferos'>Mamíferos</option>
                            <option value='Reptiles'>Reptiles</option>
                            <option value='Anfibios'>Anfibios</option>
                            <option value='Insectos'>Insectos</option>
                            <option value='Plantas'>Plantas</option>
                            <option value='Hongos'>Hongos</option>
                        </FormB.Select>
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-order-species">Orden *</FormB.Label>
                        <FormB.Control
                            type="text" required
                            id="inpt-order-species"
                            className="mb-3"
                            placeholder="Subfilo de la especie"
                            pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                            title="El campo debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                            disabled={!props.formState}
                            value={props.order}
                            onChange={(evt) => props.setOrder(evt.target.value)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-family-species">Familia *</FormB.Label>
                        <FormB.Control
                            type="text" required
                            id="inpt-family-species"
                            className="mb-3"
                            placeholder="Subfilo de la especie"
                            pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                            title="El campo debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                            disabled={!props.formState}
                            value={props.family}
                            onChange={(evt) => props.setFamily(evt.target.value)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-genus-species">Género *</FormB.Label>
                        <FormB.Control
                            type="text" required
                            id="inpt-genus-species"
                            className="mb-3"
                            placeholder="Género de la especie"
                            pattern="[a-zA-ZÀ-ÿ\s]{2,}"
                            title="El género debe tener mínimo 2 letras y no debe contener números o caracteres especiales"
                            disabled={!props.formState}
                            value={props.genus}
                            onChange={(evt) => props.setGenus(evt.target.value)} />
                    </Col>
                </Row>
            </FormB.Group>

            <FormB.Group>
                <legend className="mt-4 fw-semibold">Información</legend>
                <Row>
                    <Col>
                        <FormB.Label htmlFor="inpt-description-species">Descripción *</FormB.Label>
                        <FormB.Control
                            as="textarea" required
                            id="inpt-description-species"
                            className="mb-3" rows='5'
                            placeholder="Descripción general de la especie"
                            disabled={!props.formState}
                            value={props.description}
                            onChange={(evt) => props.setDescription(evt.target.value)} />
                    </Col>
                </Row>
                <Row xs={1} sm={2} lg={3}>
                    <Col>
                        <FormB.Label htmlFor="inpt-url-map-species">Url de ubicación del registro</FormB.Label>
                        <FormB.Control
                            type="url"
                            id="inpt-url-map-species"
                            className="mb-3"
                            placeholder="Ubicación del registro (Url Google Maps)"
                            disabled={!props.formState}
                            value={props.mapUrl}
                            onChange={(evt) => props.setMapUrl(evt.target.value)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-inaturalist-species">Url de iNaturalist</FormB.Label>
                        <FormB.Control
                            type="url"
                            id="inpt-inaturalist-species"
                            className="mb-3"
                            placeholder="iNaturalist (Url de observación)"
                            disabled={!props.formState}
                            value={props.inaturalistUrl}
                            onChange={(evt) => props.setInaturalistUrl(evt.target.value)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-color-species">Color del pelaje</FormB.Label>
                        <FormB.Select
                            id="inpt-color-species"
                            className="mb-3"
                            disabled={!props.formState}
                            value={props.color}
                            onChange={(evt) => props.setColor(evt.target.value)}>
                            <option value=''>-- Selecciona un color --</option>
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
                        </FormB.Select>
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-size-species">Tamaño aprox. en centímetros</FormB.Label>
                        <FormB.Control
                            type="number"
                            min={0}
                            id="inpt-size-species"
                            className="mb-3"
                            placeholder="Tamaño aprox. en centímetros"
                            disabled={!props.formState}
                            value={props.size}
                            onChange={(evt) => props.setSize(evt.target.value)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-food-species">Alimentos</FormB.Label>
                        <FormB.Control
                            type="text"
                            id="inpt-food-species"
                            placeholder="Alimentos de la especie"
                            disabled={!props.formState}
                            value={props.food}
                            onChange={(evt) => props.setFood(evt.target.value)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-habitat-species">Hábitat *</FormB.Label>
                        <FormB.Select
                            id="inpt-habitat-species" required
                            className="mb-3"
                            disabled={!props.formState}
                            value={props.habitat}
                            onChange={(evt) => props.setHabitat(evt.target.value)}>
                            <option value=''>-- Selecciona un hábitat --</option>
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
                        </FormB.Select>
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-extinction-species">Estado</FormB.Label>
                        <FormB.Check
                            type="checkbox"
                            id="inpt-extinction-species"
                            className="mb-3 mt-1"
                            label='Especie en vía de extinción'
                            disabled={!props.formState}
                            checked={props.extincion}
                            onChange={(evt) => props.setExtincion(evt.target.checked)} />
                    </Col>
                </Row>
            </FormB.Group>

            <FormB.Group>
                <legend className="mt-4 fw-semibold">Imágenes</legend>
                <Row xs={1} md={2}>
                    <Col>
                        <FormB.Label htmlFor="inpt-images-species">Registros fotográficos *</FormB.Label>
                        <FormB.Control
                            type="file"
                            name="inpt-images-species"
                            id="inpt-images-species"
                            className="mb-3"
                            multiple
                            disabled={!props.formState}
                            accept='.jpg, .jpeg, .png'
                            onChange={(evt) => props.setImages(evt.target.files)} />
                    </Col>
                    <Col>
                        <FormB.Label htmlFor="inpt-src-image-species">Fuente de las imágenes</FormB.Label>
                        <FormB.Control
                            type="text"
                            id="inpt-src-image-species"
                            className="mb-3"
                            placeholder="Fuente del registro fotográfico"
                            disabled={!props.formState}
                            value={props.srcImage}
                            onChange={(evt) => props.setSrcImage(evt.target.value)}
                        />
                    </Col>
                </Row>
            </FormB.Group>

            <FormB.Group>
                <legend className="mt-4 fw-semibold">Sonido</legend>
                <Row xs={1} md={2}>
                    <Col>
                        <FormB.Label htmlFor="inpt-sound-species">Registro de sonido</FormB.Label>
                        <FormB.Control
                            type="file"
                            name="inpt-sound-species"
                            id="inpt-sound-species"
                            className="mb-3"
                            disabled={!props.formState}
                            accept='.mp3'
                            onChange={(evt) => props.setSound(evt.target.files)} />
                    </Col>

                    <Col>
                        <FormB.Label htmlFor="inpt-src-sound-species">Fuente del sonido</FormB.Label>
                        <FormB.Control
                            type="text"
                            id="inpt-src-sound-species"
                            className="mb-3"
                            placeholder="Fuente del sonido"
                            disabled={!props.formState}
                            value={props.srcSound}
                            onChange={(evt) => props.setSrcSound(evt.target.value)}
                        />
                    </Col>
                </Row>
            </FormB.Group>

            <Container className="text-center">
                <Button
                    variant={props.specie ? 'primary' : 'success'}
                    className="mb-3 ms-3"
                    type="submit"
                    disabled={!props.formState}
                >
                    {props.specie ? <FontAwesomeIcon icon={faEdit} /> : <FontAwesomeIcon icon={faPlus} />}
                    {props.specie ? ' Editar' : ' Agregar'}
                </Button>
                {props.specie ?
                    <Button
                        variant='danger '
                        className="mb-3 ms-4"
                        onClick={props.handleDelete}>
                        <FontAwesomeIcon icon={faTrash} /> Eliminar</Button>
                    : <></>}
            </Container>
        </FormB>
    );
}

export default Form;
import React from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import useGetSpecie from '../../hooks/useGetSpecie';
import deleteSpecie from '../../firebase/deleteSpecie';
import SpecieForm from '../SpecieForm';
import Navbar from '../main/Navbar';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

/**
 * Este componente se encarga identificar las especie que se desea editar, habilitar la posibilidad
 * de edición en caso de ser posible y de gestionar la eliminación del registro en la base de datos
 * si el usuario lo solicita.
 * 
 * @returns El formulario que contiene los campos para la edición y el botón que permite eliminar
 */
const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [specie, docState] = useGetSpecie(id);

    /**
     * Esta función asincrona se encarga de confirmar la eliminación de un registro y si es confirmado
     * proceder con la eliminación tanto de su registro como del contenido multimedia asociado a él
     */
    const handleDelete = async ()=>{
        if (window.confirm("¿Está seguro de eliminar el registro?")) {
            await deleteSpecie(id, specie.images, specie.sound);
            navigate('/');
        }
    }

    return (
        <>
            <Navbar brand='FDC' title= 'Administrador | FDC' full={true}/>
            <Container className='py-3'>
                <NavLink to={'/'}>Volver al inicio</NavLink>
                <h2>Editar una especie</h2>

                {docState === 'load' && <h1>Cargando...</h1>}
                {docState === 'empty' && <h1>La especie no se ha encontrado, <NavLink to={'/'}>vuelva al inicio</NavLink></h1>}
                {docState === 'exists' &&
                    <div>
                        <p>ID de la especie: {id}</p>
                        
                        <SpecieForm
                            id={id}
                            specie={specie}
                        />

                        <Button variant='danger' onClick={handleDelete}><FontAwesomeIcon icon={faTrash}/> Eliminar</Button>
                    </div>
                }
            </Container>
        </>
    );
}

export default Edit;
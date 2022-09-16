import React, { useState, useEffect } from 'react';
import MetaTags from '../main/MetaTags';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import useGetSpecie from '../../hooks/useGetSpecie';
import deleteSpecie from '../../firebase/deleteSpecie';
import Confirm from '../../elements/Confirm';
import SpecieForm from '../main/SpecieForm';
import Navbar from '../../elements/Navbar';
import { Container, Spinner } from 'react-bootstrap';

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
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteState, setDeleteState] = useState(false);

    useEffect(() => {
        if (deleteState === true) {
            deleteSpecie(id, specie.images, specie.sound);
            navigate('/');
        }
    }, [deleteState, id, navigate, specie, specie.sound])

    /**
     * Esta función asincrona se encarga de confirmar la eliminación de un registro y si es confirmado
     * proceder con la eliminación tanto de su registro como del contenido multimedia asociado a él
     */
    const handleDelete = async () => {
        setShowConfirm(true);
    }

    return (
        <>
            <MetaTags title='Editar Especie | FDC' />
            <Navbar brand='FDC' title='Administrador | FDC' full={true} />
            <Confirm
                show={showConfirm}
                setShow={setShowConfirm}
                setDeleteState={setDeleteState}
            />
            <Container className='py-3'>
                <NavLink to={'/'} className='text-decoration-none'>Volver al inicio</NavLink>
                <h2><b>Editar especie</b></h2>

                {docState === 'load' &&
                    <Container className='d-flex'>
                        <Spinner animation='border' variant='primary' className='mx-auto my-5' />
                    </Container>
                }
                {docState === 'empty' && <h3>La especie no se ha encontrado, <NavLink to={'/'}>vuelva al inicio</NavLink></h3>}
                {docState === 'exists' &&
                    <div>
                        <MetaTags title={'Editar | ' + specie.commonName + ' | FDC'} />
                        <p>ID de la especie: {id}</p>

                        <SpecieForm
                            id={id}
                            specie={specie}
                            handleDelete={handleDelete}
                        />
                    </div>
                }
            </Container>
        </>
    );
}

export default Edit;
import React from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import useGetSpecie from '../../hooks/useGetSpecie';
import deleteSpecie from '../../firebase/deleteSpecie';
import SpecieForm from '../SpecieForm';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [specie, docState] = useGetSpecie(id);

    const handleDelete = async ()=>{
        if (window.confirm("¿Está seguro de eliminar el registro?")) {
            await deleteSpecie(id, specie.images, specie.sound);
            navigate('/');
        }
    }

    return (
        <>
            <h1>Editar una especie</h1>
            <NavLink to={'/'}>Volver al inicio</NavLink>

            {docState === 'load' && <h1>Cargando...</h1>}
            {docState === 'empty' && <h1>La especie no se ha encontrado, <NavLink to={'/'}>vuelva al inicio</NavLink></h1>}
            {docState === 'exists' &&
                <div>
                    <p>Id de especie: {id}</p>
                    
                    <SpecieForm
                        id={id}
                        specie={specie}
                    />

                    <button onClick={handleDelete}>Eliminar</button>
                </div>
            }
        </>
    );
}

export default Edit;
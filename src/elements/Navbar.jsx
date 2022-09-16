import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Button, Container, Nav } from 'react-bootstrap';
import { Navbar as NavbarB } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

/**
 * Este componente contiene el HTML del navbar que contiene enlaces de navegación y la posibilidad
 * de cerrar la sesión
 * 
 * @returns Retorna el Navbar
 */
const Navbar = ({brand, title, full}) => {
    const navigate = useNavigate();

    /**
     * Se encarga de gestionar el logout y redireccionar hacia el login
     */
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <NavbarB bg='dark' variant='dark'>
            <Container>
                <NavbarB.Brand as={NavLink} to={'/'} title={title}><h3><b>{brand}</b></h3></NavbarB.Brand>
                {full &&
                    <Nav>
                        <Button variant='success' as={NavLink} to={'/create'} className='me-3'><FontAwesomeIcon icon={faPlus}/> Crear</Button>
                        <Button variant='danger' onClick={handleLogout} title='Cerrar Sesión'><FontAwesomeIcon icon={faSignOutAlt}/> Salir</Button>
                    </Nav>
                }
            </Container>
        </NavbarB>
    );
}

export default Navbar;
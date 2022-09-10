import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

/**
 * Este componente contiene el HTML del navbar que contiene enlaces de navegación y la posibilidad
 * de cerrar la sesión
 * 
 * @returns Retorna el Navbar
 */
const Navbar = () => {
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
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/create'}>
                        Crear
                    </NavLink>
                </li>
                <li>
                    <button onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
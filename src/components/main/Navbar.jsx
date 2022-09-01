import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
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
                    <NavLink to={'/login'}>
                        Inicio de sesión
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/edit/id'}>
                        Editar
                    </NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;
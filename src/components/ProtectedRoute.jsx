import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

/**
 * Este componete se encarga de verificar si la persona está autenticada
 * 
 * @param {*} children contenido a renderizar
 * @returns En caso de estar autenticado, permite el acceso al contenido children
 * en caso de no estarlo, redirecciona hacia el login
 */
const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    if (user) {
        return children;
    } else {
        return <Navigate replace to="/login" />;
    }
}

/**
 * Este componete se encarga de verificar si la persona está autenticada
 * 
 * @param {*} children contenido a renderizar
 * @returns En caso de estar autenticado, redirecciona hacia el contenido
 * en caso de no estarlo, redirecciona hacia el login
 */
const ProtectedRouteLogin = ({ children }) => {
    const { user } = useAuth();
    if (user) {
        return <Navigate replace to="/" />;
    } else {
        return children
    }
}

export {ProtectedRoute, ProtectedRouteLogin};
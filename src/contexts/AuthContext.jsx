import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";

/**
 * Hace uso de contextAPI para guardar el estado del inicio de seción
 */
const AuthContext = React.createContext();

/**
 * 
 * @returns El hook que se encarga de verificar si un usuario ha iniciado sesión
 */
const useAuth = () => {
    return useContext(AuthContext);
}

/**
 * Componente encargado de proveer información del estado del registro del usuario
 * @param {*} children contenido a mostrar 
 * @returns retorna el contenido si ya se cargó y se comprobó el usuario
 */
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const cancelSuscription = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoad(false);
        });

        return cancelSuscription;
    }, []);

    return (
        <AuthContext.Provider value={{ user: user }}>
            {!load && children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext, useAuth };
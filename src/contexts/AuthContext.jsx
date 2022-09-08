import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}

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
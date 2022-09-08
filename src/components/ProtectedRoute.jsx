import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    if (user) {
        return children;
    } else {
        return <Navigate replace to="/login" />;
    }
}

const ProtectedRouteLogin = ({ children }) => {
    const { user } = useAuth();
    if (user) {
        return <Navigate replace to="/" />;
    } else {
        return children
    }
}

export {ProtectedRoute, ProtectedRouteLogin};
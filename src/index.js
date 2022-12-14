import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute, ProtectedRouteLogin } from './components/main/ProtectedRoute';
import App from './App';
import Login from './components/login/Login';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import Page404 from './components/main/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            } />
            <Route path='/login' element={
              <ProtectedRouteLogin>
                <Login />
              </ProtectedRouteLogin>
            } />
            <Route path='/create' element={
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            } />
            <Route path='/edit/'>
              <Route path=':id' element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
            </Route>
            <Route path='/*' element={
              <Page404/>
            }>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
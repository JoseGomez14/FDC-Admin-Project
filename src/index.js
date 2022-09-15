import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute, ProtectedRouteLogin } from './components/ProtectedRoute';
import App from './App';
import Login from './components/login/Login';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
import React, { useState } from 'react';
import MetaTags from '../main/MetaTags';
import { useNavigate } from 'react-router-dom';
import loginUser from '../../firebase/loginUser';
import icon from '../../images/icon.png';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Alert from '../../elements/Alert';

/**
 * Este componente se encarga de gestionar el formulario de inicio de sesión
 * 
 * @returns El formulario de incio de sesión
 */
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({})
    const [alertState, setAlertState] = useState(false);

    /**
     * Se encarga de verificar que la información ingresada cumpla con los requisitos y si es así
     * enviar la información para validar desde loginUser con auth de firebase
     * 
     * @param {*} evt información del evento submit del formulario
     */
    const handleLogin = async (evt) => {
        evt.preventDefault();
        if (email === '' || password === '') {
            setAlert({text: 'Debes completar todos los campos', variant: 'warning'})
            setAlertState(true);
            return;
        }

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(email)) {
            setAlert({text: 'El correo no es válido', variant: 'danger'})
            setAlertState(true);
            return;
        }

        loginUser(email, password, navigate, setAlert, setAlertState)
    }

    return (
        <main className='d-flex flex-column justify-content-center' style={{ background: '#f4f4f4', height: '100vh' }}>
            <MetaTags title='Inicio de Sesión | FDC'/>
            <Alert 
                text={alert.text}
                variant={alert.variant}
                alertState={alertState}
                setAlertState={setAlertState}
            />
            <div className='container mx-auto px-4 d-flex flex-column justify-content-center align-items-center rounded overflow-auto'
                style={{ background: '#FFF', height: '90%' }}>
                <h1 className='text-primary'><b>Inicio de sesión</b></h1>
                <img src={icon} alt="Icono Fuera de Contexto" height='200px' className='mb-4' />
                <Form onSubmit={handleLogin} className="w-100" style={{ maxWidth: '400px', color: '#666' }}>
                    <Form.Group className="mb-4" controlId='inpt-email'>
                        <Form.Label className="fs-5"><b>Correo electrónico</b></Form.Label>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                            <Form.Control
                                size="lg"
                                type="email"
                                value={email}
                                autoComplete='username'
                                onChange={(evt) => setEmail(evt.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId='inpt-password'>
                        <Form.Label className="fs-5"><b>Contraseña</b></Form.Label>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                            <Form.Control
                                size="lg"
                                type="password"
                                value={password}
                                autoComplete='current-password'
                                onChange={(evt) => setPassword(evt.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <div className="d-grid col-3 mx-auto">
                        <Button type='submit' variant='success' className="fs-5 mx-auto" >Ingresar</Button>
                    </div>
                </Form>
            </div>
        </main>
    );
}

export default Login;
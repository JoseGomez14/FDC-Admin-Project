import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import loginUser from '../../firebase/loginUser';

/**
 * Este componente se encarga de gestionar el formulario de inicio de sesión
 * 
 * @returns El formulario de incio de sesión
 */
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /**
     * Se encarga de verificar que la información ingresada cumpla con los requisitos y si es así
     * enviar la información para validar desde loginUser con auth de firebase
     * 
     * @param {*} evt información del evento submit del formulario
     */
    const handleLogin = async (evt) => {
        evt.preventDefault();
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(email)) {
            alert("El correo no es válido")
            return;
        }

        if (email === '' || password === '') {
            alert('Debes completar todos los campos')
            return;
        }

        loginUser(email, password, navigate)
    }

    return (
        <>
            <h1>Inicio de sesión</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="">
                    Correo electrónico<br />
                    <input
                        type="email"
                        value={email}
                        autoComplete='username'
                        onChange={(evt) => setEmail(evt.target.value)}/>
                </label><br />
                <label htmlFor="">
                    <br />Contraseña<br />
                    <input 
                        type="password"
                        value={password}
                        autoComplete='current-password'
                        onChange={(evt) => setPassword(evt.target.value)} />
                </label><br /><br />

                <button type='submit'>Ingresar</button>
            </form>
        </>
    );
}

export default Login;
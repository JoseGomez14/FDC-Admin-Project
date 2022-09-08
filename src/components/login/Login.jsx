import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('La contraseña no es correcta.');
                    break;
                case 'auth/user-not-found':
                    alert('No se encontro ninguna cuenta con este correo electrónico.');
                    break;
                default:
                    alert('Hubo un error al intentar crear la cuenta.');
                    break;
            }
        }
    }

    return (
        <>
            <h1>Inicio de sesión</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="">
                    Correo electrónico<br />
                    <input type="email" value={email} onChange={(evt) => setEmail(evt.target.value)}/>
                </label><br />
                <label htmlFor="">
                    <br />Contraseña<br />
                    <input type="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                </label><br /><br />

                <button type='submit'>Ingresar</button>
            </form>
        </>
    );
}

export default Login;
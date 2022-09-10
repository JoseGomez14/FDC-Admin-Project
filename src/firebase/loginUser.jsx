import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'

/**
 * Componente encargado de la validación del inicio de sesión en firebase auth
 * @param {string} email correo ingresado por el usuario
 * @param {string} password contraseña ingresada por el usuario
 * @param {useNavigate} navigate hook para la navegación por el sitio web
 */
const loginUser = async (email, password, navigate) => {
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
 
export default loginUser;
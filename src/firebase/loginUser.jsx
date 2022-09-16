import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'

/**
 * Componente encargado de la validación del inicio de sesión en firebase auth
 * @param {string} email correo ingresado por el usuario
 * @param {string} password contraseña ingresada por el usuario
 * @param {useNavigate} navigate hook para la navegación por el sitio web
 */
const loginUser = async (email, password, navigate, setAlert, setAlertState) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
    } catch (error) {
        switch (error.code) {
            case 'auth/wrong-password':
                setAlert({text: 'La contraseña no es correcta.', variant: 'danger'});
                break;
            case 'auth/user-not-found':
                setAlert({text: 'No se encontro ninguna cuenta con este correo electrónico.', variant: 'danger'});
                break;
            default:
                setAlert({text: 'Hubo un error al intentar iniciar sesión', variant: 'danger'});
                break;
        }
        setAlertState(true);
    }
}
 
export default loginUser;
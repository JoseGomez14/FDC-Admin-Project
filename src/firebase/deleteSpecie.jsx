import { dataBase } from './firebaseConfig'
import { doc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const useDeleteSpecie = () => {
    const navigate = useNavigate();

    const deleteSpecie = async (id) => {
        await deleteDoc(doc(dataBase, "species", id));
            navigate('/');
    }
    return [deleteSpecie];
}
 
export default useDeleteSpecie;
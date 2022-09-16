import { dataBase } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

/**
 * Su función es actualizar información de un registro en la base de datos
 * @param {string} id identificador de la especie en la base de datos 
 * @param {*} species información del registro a actualizar
 */
const updateSpecie = async (id, species, setAlert, setAlertState) => {
    const docRef = doc(dataBase, "species", id);
    try {
        await updateDoc(docRef, species.toJson());
        setAlert({text: "¡La información de la especie se actualizó correctamente! :)", variant: 'success'});
        setAlertState(true);
    } catch (error) {
        setAlert({text: "Ocurrió un error al actualizar la información, inténtalo nuevamente.", variant: 'danger'});
        setAlertState(true);
    }
}
 
export default updateSpecie;
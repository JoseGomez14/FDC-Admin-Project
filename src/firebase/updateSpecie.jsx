import { dataBase } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

/**
 * Su función es actualizar información de un registro en la base de datos
 * @param {string} id identificador de la especie en la base de datos 
 * @param {*} species información del registro a actualizar
 */
const updateSpecie = async (id, species) => {
    const docRef = doc(dataBase, "species", id);
    await updateDoc(docRef, species.toJson());
    alert("The doc was updated");
}
 
export default updateSpecie;
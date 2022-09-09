import { dataBase } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const updateSpecie = async (id, species) => {
    const docRef = doc(dataBase, "species", id);
    await updateDoc(docRef, species.toJson());
    alert("The doc was updated");
}
 
export default updateSpecie;
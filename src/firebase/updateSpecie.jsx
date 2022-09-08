import { useState } from "react";
import { dataBase } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const useUpdateSpecie = () => {
    const [formState, setFormState] = useState(true);

    const updateSpecies = async (id, species) => {
        setFormState(false);
        const docRef = doc(dataBase, "species", id);
        await updateDoc(docRef, species.toJson());
        alert("The doc was updated");
        setFormState(true);
    }

    return [updateSpecies, formState];
}
 
export default useUpdateSpecie;
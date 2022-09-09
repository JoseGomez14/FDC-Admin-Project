import { dataBase, storage } from './firebaseConfig'
import { doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from "firebase/storage";

const deleteSpecie = async (id, images, sound) => {

    await deleteDoc(doc(dataBase, "species", id));

    await images.forEach(async image => {
        const desertRef = ref(storage, image);

        await deleteObject(desertRef).catch((error) => {
            console.log(error);
        });
    });

    if(sound !== ''){
        const desertRef = ref(storage, sound);

        await deleteObject(desertRef)
        .catch((error) => {
            console.log(error);
        });
    }

}
 
export default deleteSpecie;
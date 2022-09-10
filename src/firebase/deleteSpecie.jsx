import { dataBase, storage } from './firebaseConfig'
import { doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from "firebase/storage";

/**
 * Funcionalidad encargada de eliminar el registro indicado desde la base de datos y
 * sus elementos multimedia asociados
 * @param {string} id identificador de la especie en la base de datos
 * @param {string[]} images array de dirrecciones url de las images del registro
 * @param {string} sound  dirección url del sonido del registro
 */
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
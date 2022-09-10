import { useState, useEffect } from "react";
import { dataBase } from "../firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

/**
 * Hook encargado de cargar la información de una especie en específico dado su id
 * @param {string} id identificador de la especie en la base de datos
 * @returns retorna la información obtenida y el estado de la transacción
 */
const useGetSpecie = (id) => {
    const [specie, setSpecie] = useState({})
    const [docState, setDocState] = useState('load');
    
    useEffect(() => {
        const loadDoc = async () => {
            const docRef = doc(dataBase, "species", id);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                setDocState('exists');
                setSpecie(docSnap.data())
            } else {
                setDocState('empty');
            }
        }
    
      return loadDoc
    }, [id])
    

    return [specie, docState];
}
 
export default useGetSpecie;
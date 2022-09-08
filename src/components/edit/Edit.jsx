import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {dataBase} from '../../firebase/firebaseConfig'
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { Species } from '../../model/Species';

const Edit = () => {

    const [docState, setDocState] = useState('load');
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [soundUrl, setSoundUrl] = useState("");
    const [imageUrls, setImageUrls] = useState([]);
    const [stateForm, setStateForm] = useState(true);

    const {id} = useParams();
    useEffect(() => {
        loadDoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const loadDoc = async () => {
        const docRef = doc(dataBase, "species", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setDocState('exists');
            loadData(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            setDocState('empty');
          }
    }

    const loadData = (data)=>{
        setCommonName(data.commonName);
        setScientificName(data.scientificName);
        setSoundUrl(data.images);
        setImageUrls(data.sound);
    }

    const updateSpecies = (evt)=>{
        evt.preventDefault();
        setStateForm(false);
        const species = new Species(commonName, scientificName, imageUrls, soundUrl);
        const docRef = doc(dataBase, "species", id);
        updateDoc(docRef, species.toJson());
        alert("The doc was updated");
        setStateForm(true);
    }

    return ( 
        <>  
            {docState === 'load'? <h1>Cargando...</h1>: <></>}
            {docState === 'empty'? <h1>La especie no se ha encontrado, ingresa a ...</h1>: <></>}
            {docState === 'exists'? 
            <div>
            <h1>Editar una especie</h1>
            <p>Id de especie: {id}</p>
            <form onSubmit={updateSpecies}>
                <label htmlFor="">
                    Nombre de la especie<br/>
                    <input
                    type="text"
                    placeholder='Nombre de la especie'
                    disabled={!stateForm}
                    value={commonName}
                    onChange={(evt) => setCommonName(evt.target.value)}/>
                </label><br/>
                
                <label htmlFor="">
                    <br/>Nombre científico de la especie<br/>
                    <input
                    type="text"
                    placeholder='Nombre científico de la especie'
                    disabled={!stateForm}
                    value={scientificName}
                    onChange={(evt) => setScientificName(evt.target.value)}/>
                </label><br/>

                <label htmlFor="">
                    <br/>Fotografía de la especie<br/>
                    <input
                    type="file"
                    name=""
                    id=""
                    disabled={!stateForm}/>
                </label><br/>

                <label htmlFor="">
                    <br/>Registro de sonido de la especie<br/>
                    <input
                    type="file"
                    name=""
                    id=""
                    disabled={!stateForm}/>
                </label><br/><br/>

                <button type="submit">Editar</button>
            </form>
        </div>
        :<></>}
        </>
     );
}
 
export default Edit;
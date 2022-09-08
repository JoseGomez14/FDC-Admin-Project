import React, {useState, useEffect} from 'react'
//import photo from '../../images/photo.jpg'
import {dataBase} from '../../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { NavLink } from 'react-router-dom';

const Main = () => {

    const [loadState, setLoadState] = useState('load');
    const [species, setSpecies] = useState([])

    useEffect(() => {
      loadSpecies();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const loadSpecies = async ()=>{
        const querySnapshot = await getDocs(collection(dataBase, "species"));

        if(!querySnapshot.empty){
            setLoadState('exists');
            let docsSpecies = [];
            querySnapshot.forEach(doc => {
                docsSpecies.push(doc.data());
            })
            setSpecies(docsSpecies);
        }else{setLoadState('empty')}
    }

    return ( 
        <main>
            <h1>Página Administrador</h1>
            <h2>Contenidos:</h2>
            {loadState === 'load'?<h1>Cargando...</h1>:<></>}
            {loadState === 'empty'?<h1>No hay especies registradas.</h1>:<></>}
            {loadState === 'exists'?<>
                {species.map((obj, index) =>{
                    return <div key={'species-main' + index}>
                        <h2>{obj.commonName}</h2>
                        <NavLink to={`/edit/${obj.id}`}>Editar</NavLink>
                    </div>
                })}
            </>:<></>}
        </main>
     );
}
 
export default Main;
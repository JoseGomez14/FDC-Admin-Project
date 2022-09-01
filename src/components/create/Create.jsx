import React from 'react';

const Create = () => {
    return ( 
        <>
            <h1>Agregar una especie</h1>
            <form>
                <label htmlFor="">
                    Nombre de la especie<br/>
                    <input type="text" placeholder='Nombre de la especie'/>
                </label><br/>
                
                <label htmlFor="">
                    <br/>Nombre científico de la especie<br/>
                    <input type="text" placeholder='Nombre científico de la especie'/>
                </label><br/>

                <label htmlFor="">
                    <br/>Fotografía de la especie<br/>
                    <input type="file" name="" id="" />
                </label><br/>

                <label htmlFor="">
                    <br/>Registro de sonido de la especie<br/>
                    <input type="file" name="" id="" />
                </label><br/><br/>

                <button type="submit">Agregar</button>
            </form>
        </>
     );
}
 
export default Create;
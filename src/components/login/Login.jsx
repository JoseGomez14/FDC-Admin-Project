import React from 'react'

const Login = () => {
    return ( 
        <>
            <h1>Inicio de sesión</h1>
            <form>
                <label htmlFor="">
                    Correo electrónico<br/>
                    <input type="email" />
                </label><br/>
                <label htmlFor="">
                    <br/>Contraseña<br/>
                    <input type="password" />
                </label><br/><br/>

                <button type='submit'>Ingresar</button>
            </form>
        </>
     );
}
 
export default Login;
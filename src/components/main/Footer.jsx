import React from 'react'
import { Container } from 'react-bootstrap';

/**
 * Este componente contiene el HTML del footer
 * @returns Retorna el Footer de la página
 */
const Footer = () => {
    return ( 
        <footer>
            <Container fluid className='float-start py-3' style={{backgroundColor: '#086972', color: '#fff'}}>
                <h3><b>Administrador | FDC</b></h3>
                <p><em>"Investigadores de lo nuestro"</em></p>
            </Container>
        </footer>
     );
}
 
export default Footer;
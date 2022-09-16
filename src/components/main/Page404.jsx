import React from 'react';
import MetaTags from '../main/MetaTags'
import Navbar from '../../elements/Navbar'
import { ReactComponent as NotFoundIcon} from '../../images/notFound.svg'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
    return ( <>
        <Navbar brand='Fuera de Contexto' full={false}/>
        <MetaTags title={'FDC | Error 404!'}/>
        <Container className='d-flex flex-column text-center mt-5'>
            <p className='display-2 fw-bold' style={{color: '#00BFA6'}}>¡Error 404!</p>
            <h1 className='mb-4'><b>La página que buscas no se encuentra en esta URL</b></h1>
            <NotFoundIcon className='mx-auto mb-4' style={{maxHeight: '50vh'}}/>
            <NavLink to={'/'} className='text-decoration-none'><h3>Ir al sitio principal</h3></NavLink>
        </Container>
    </> );
}
 
export default Page404;
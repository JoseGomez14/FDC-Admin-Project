import './App.css';
import React, { useEffect, useState } from 'react';
import MetaTags from './components/main/MetaTags';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
import useGetSpecies from './hooks/useGetSpecies'
import { NavLink } from 'react-router-dom'
import { Spinner, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

/**
 * Componente encargado de mostrar la información de página principal
 * muestra las especies que se han registrado y permite ir a cada una de ellas
 * 
 * @returns los elementos de la página principal
 */
function App() {
  const [loadState, setLoadState] = useState(true);
  const [species, getMoreSpecies, moreToLoad, empty] = useGetSpecies();

  useEffect(() => {
    if (species.length > 0 || empty) {
      setLoadState(false)
    }
  }, [empty, species.length])

  return (
    <div className="App">
      <MetaTags title='Administrador | Fuera de Contexto'/>
      <Navbar brand='FDC' title='Administrador | Fuera de Contexto' full={true}/>
      <h3 className='my-4'><b>Especies registradas</b></h3>
      <Container style={{minHeight: '68.5vh'}}>
        {loadState &&
          <Row>
            <Col>
              <Spinner animation='border' variant='primary'/>
            </Col>
          </Row>
        }

        <Row xs={1} sm={2} lg={3} xl={4}>
          {species.map((specie, index) => {
            return <Col sm key={'species-main' + index} className='mb-4'>
              <Card>
                <Card.Img src={specie.images[0]} alt={specie.commonName} width='100%' style={{height:' 200px', objectFit: 'cover', borderBottom: '2px solid #44BBA4'}}/>
                <Card.Body>
                  <Card.Title><b>{specie.commonName}</b></Card.Title>
                  <Card.Subtitle><i>{specie.scientificName}</i></Card.Subtitle>
                  <Button className='mt-3' variant='primary' as={NavLink} to={`/edit/${specie.id}`}><FontAwesomeIcon icon={faEdit}/> Editar</Button>
                </Card.Body>
              </Card>
            </Col>
          })
          }
        </Row>
        
        <Row>
          <Col>
            {moreToLoad &&
              <Button variant='primary' className='my-4 me-3' onClick={() => getMoreSpecies()}>Cargar Más</Button>
            }
            <Button variant='success' className='my-4' as={NavLink} to={'/create'}><FontAwesomeIcon icon={faPlus}/> Crear</Button>
          </Col>
        </Row>

        {empty &&
          <Row>
            <Col>
              <h3>No hay especies registradas.</h3>
              <NavLink to="/create">Agregar Especies</NavLink>
            </Col>
          </Row>
        }
      </Container>
      <Footer />
    </div>
  );
}

export default App;

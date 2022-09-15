import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
import useGetSpecies from './hooks/useGetSpecies'
import { NavLink } from 'react-router-dom'
import { Spinner, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

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
      <Navbar />
      <h3 className='my-4'><b>Especies registradas</b></h3>
      <Container style={{minHeight: '70vh'}}>
        {loadState &&
          <Row>
            <Col>
              <Spinner animation='border' variant='primary'/>
            </Col>
          </Row>
        }

        <Row xs={1} sm={2} lg={3} xl={4}>
          {species.map((specie, index) => {
            return <Col sm key={'species-main' + index}>
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

        {moreToLoad &&
          <Row>
            <Col>
              <Button variant='success' className='my-4' onClick={() => getMoreSpecies()}>Cargar Más</Button>
            </Col>
          </Row>
        }

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

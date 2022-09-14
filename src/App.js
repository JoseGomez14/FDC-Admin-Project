import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
import useGetSpecies from './hooks/useGetSpecies'
import { NavLink } from 'react-router-dom'

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
      <h1>Página Administrador</h1>
      <h2>Contenidos:</h2>
      {loadState &&
        <h2>Cargando...</h2>
      }

      {species.map((specie, index) => {
        return <div key={'species-main' + index}>
          <h2>{specie.commonName}</h2>
          <NavLink to={`/edit/${specie.id}`}>Editar</NavLink>
        </div>
      })
      }

      {moreToLoad &&
        <button onClick={() => getMoreSpecies()}>Cargar Más</button>
      }

      {empty &&
        <div>
          <h1>No hay especies registradas.</h1>
          <NavLink to="/create">Agregar Especies</NavLink>
        </div>
      }
      <Footer />
    </div>
  );
}

export default App;

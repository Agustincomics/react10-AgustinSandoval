import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import './App.css';
import Formulario from './components/Formulario';
import Cards from './components/Cards';

const App = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const storedPeliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
    setPeliculas(storedPeliculas);
  }, []);

  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }, [peliculas]);

  const agregarPelicula = (nuevaPelicula) => {
    setPeliculas([...peliculas, nuevaPelicula]);
  };

  const borrarPelicula = (id) => {
    const peliculasActualizadas = peliculas.filter((pelicula) => pelicula.id !== id);
    setPeliculas(peliculasActualizadas);
  };

  return (
    <>
      <div id='root'>
        <Container className='my-5 mainPage'>
          <h1>Formulario de Películas</h1>
          <Formulario agregarPelicula={agregarPelicula} />
          <h2>Películas Guardadas</h2>
          {peliculas.length === 0 ? (
            <p>No hay películas guardadas.</p>
          ) : (
            <Cards peliculas={peliculas} borrarPelicula={borrarPelicula} />
          )}
        </Container>
        <footer className='bg-dark text-light text-center p-4'>
          <p>&copy; Todos los derechos reservados</p>
        </footer>
      </div>
    </>
  )
}

export default App

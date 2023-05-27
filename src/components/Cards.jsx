import React from 'react';
import { Button } from 'react-bootstrap';

const Cards = ({ peliculas, borrarPelicula }) => {
  return (
    <div>
      {peliculas.map((pelicula) => (
        <div key={pelicula.id} className="card">
          <h3>{pelicula.nombre}</h3>
          <p>{pelicula.descripcion}</p>
          <p>Género: {pelicula.genero}</p>
          <Button variant="danger" onClick={()=> borrarPelicula(pelicula.id)}>Borrar</Button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
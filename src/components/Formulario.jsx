import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

const Formulario = ({ agregarPelicula }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('comedia');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaPelicula = {
      id: new Date().getTime(),
      nombre,
      descripcion,
      genero,
    };

    agregarPelicula(nuevaPelicula);

    setNombre('');
    setDescripcion('');
    setGenero('comedia');
  };

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text" placeholder="Ingrese el Nombre de la pelicula" required maxLength={20} minLength={4}
                    onChange={(e)=> setNombre(e.target.value)}
                    value={nombre} />
                     <Form.Control type="text" placeholder="Ingrese la descripcion" required maxLength={200} minLength={10}
                    onChange={(e)=> setDescripcion(e.target.value)} 
                    value={descripcion} />
                     <Form.Select required value={genero} onChange={(e) => setGenero(e.target.value)}>
                        <option value="comedia">Comedia</option>
                        <option value="drama">Drama</option>
                        <option value="infantil">infantil</option>
                     </Form.Select>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
        </section>
    );
};

export default Formulario;
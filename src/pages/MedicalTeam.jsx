import React, { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard'; // Importar correctamente DoctorCard
import { Container, Form, Card, InputGroup, Row, Col, Table } from 'react-bootstrap';
import Banner from '../components/Banner';

// Traer información de servicios
const API_URL = "http://demo5081911.mockable.io/medicos";

const EquipoMedico = () => {
  const [equipoMedico, setEquipoMedico] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [filtrado, setFiltrado] = useState([]);

  useEffect(() => {
    const obtenerEquipoMedico = async () => {
      try {
        const data = await fetch(API_URL);
        if (!data.ok) {
          throw new Error("Error al obtener la data");
        }
        const result = await data.json();
        setEquipoMedico(result);
        setFiltrado(result);
      } catch (error) {
        console.error('Error fetching equipo médico:', error);
      }
    };

    obtenerEquipoMedico();
  }, []);

  // Función para filtrar por especialidad
  const handleFiltro = (especialidad) => {
    const filtrados = equipoMedico.filter((doctor) =>
      doctor.especialidad.toLowerCase().includes(especialidad.toLowerCase())
    );
    setFiltrado(filtrados);
  };

  return (
    <Container>
      <Banner />
      <br />
      <Card className="mb-4">
        <Card.Body>
          <Form>
            <Form.Group controlId="filtroEspecialidad">
              <Form.Label>Filtrar por especialidad:</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Ejemplo: Cardiología"
                  value={filtro}
                  onChange={(e) => {
                    setFiltro(e.target.value);
                    handleFiltro(e.target.value);
                  }}
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      {filtrado.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Contacto</th>
            </tr>
          </thead>
          <tbody>
            {filtrado.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.nombre}</td>
                <td>{doctor.especialidad}</td>
                <td>{doctor.contacto}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center">No se encontraron resultados.</p>
      )}
    </Container>
  );
};

export default EquipoMedico;

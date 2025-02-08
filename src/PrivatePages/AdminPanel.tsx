import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AdminPanel = () => {
    const { isAuthenticated, role, logout } = useAuth();
    if (!isAuthenticated || role !== 'Admin') {
        return <Navigate to="/login" replace />;
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <>
                                <div>
                                    <img
                                        src="https://ui-avatars.com/api/?name=Admin&background=179fcd&color=fff&size=128"
                                        alt="Perfil Admin"
                                        className="user-greeting__avatar"
                                    />
                                    <h1> ¡Bienvenido, Admin!  </h1>
                                    <h2>Panel de Administrador</h2>
                                </div>

                            </>

                        </Card.Header>
                        <Card.Body>
                            <h4>Bienvenido al panel de administración</h4>
                            <p>Aquí puedes gestionar usuarios, ver estadísticas y más.</p>
                            <Button variant="primary" onClick={() => alert('Gestión de usuarios')}>
                                Gestionar Usuarios
                            </Button>
                            <Button variant="secondary" onClick={() => alert('Ver estadísticas')}>
                                Ver Estadísticas
                            </Button>
                            <Button variant="danger" onClick={logout}>
                                Cerrar sesión
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPanel;

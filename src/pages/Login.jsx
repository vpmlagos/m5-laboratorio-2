import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = (userRole) => {
    login(userRole); // Pasar el rol como argumento
  };

  return (
    <div className="container mb-5">
      <div className="container text-center">
        <h2>Iniciar Sesión</h2>
        <button className="btn btn-primary" onClick={() => handleLogin('doctor')}>Iniciar Sesión como Doctor</button>
        <button className="btn btn-secondary" onClick={() => handleLogin('admin')}>Iniciar Sesión como Administrador</button>
      </div>
    </div>
  );
};

export default Login;

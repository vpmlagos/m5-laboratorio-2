import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null); // Guardar el rol del usuario

   const login = (role) => {
    // Aquí puedes almacenar un objeto con la información del usuario
    const userInfo = { name: 'Usuario de ejemplo', role }; // Ejemplo de usuario
    setUser(userInfo);
    if (role === 'doctor') {
      navigate('/doctor-dashboard');
    } else if (role === 'admin') {
      navigate('/admin-dashboard');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

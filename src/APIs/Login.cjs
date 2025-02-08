require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors'); 
const app = express();

const users = [
  { id: 1, username: 'admin', password: 'password123', role: 'Admin' },
  { id: 2, username: 'user', password: 'userpass', role: 'User' }
];

const SECRET_KEY = process.env.SECRET_KEY || 'default-secret-key';

app.use(cors({
  origin: 'http://localhost:5174',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json()); 

// Endpoint de login
app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Credenciales incorrectas' }); 
  }

  // Crear el JWT
  const payload = {
    sub: user.id,
    username: user.username,
    role: user.role
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  res.json({ access_token: token });
});

// Endpoint protegido (requiere un JWT válido)
app.get('/protected', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];  

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado' }); 
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: 'Acceso autorizado', user: decoded });
  } catch (err) {
    return res.status(401).json({ message: 'Token no válido o expirado' }); // Respuesta mejorada
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

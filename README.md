
## INSTALACIÓN

<code>
git clone git@github.com:vpmlagos/m4-laboratorio-3.git
cd m4-l3-app <br>
npm install<br>
npm install react-router-dom<br>
npm install prop-types<br>
npm install bootstrap<br>
npm install bootstrap @popperjs/core<br>
npm install react-bootstrap-icons<br>
npm install axios
npm install react-router-dom
npm install cors
npm install express
npm install dotenv
npm install helmet
npm install express-rate-limit
npm install xss-clean
npm install bcryptjs<br>
npm run dev<br>
node ./src/APIs/Login.cjs<br>
</code>


## Protección de Rutas con React Router DOM

### PREMISA

Implementa seguridad en las rutas del sistema del hospital, asegurando que solo los
usuarios autenticados puedan acceder a ciertas secciones (como la gestión del equipo
médico o los registros de pacientes).
- Utiliza React Router DOM para gestionar las rutas protegidas.
- Asegúrate de que las rutas públicas (como la página principal) sean accesibles
sin autenticación.

## Implementación de Autenticación de Usuarios y Roles

### PREMISA

Integra un sistema básico de autenticación de usuarios que permita el login en la
aplicación del hospital.
- Los usuarios deben autenticarse para acceder a secciones protegidas.
- Implementa roles (por ejemplo, doctor y administrador) para que ciertos
usuarios solo tengan acceso a áreas específicas según su rol.

## Consumo de APIs Protegido con API Key y JWT

### PREMISA

Asegura el consumo de APIs utilizando una API Key y JWT. Los datos sensibles (como
la información de pacientes o citas) deben ser accesibles solo si el usuario ha iniciado
sesión y tiene un JWT válido.

- Implementa la verificación del token JWT en las solicitudes a la API.
- Muestra un mensaje de error si el token no es válido o ha expirado, y redirige al
usuario a la página de inicio de sesión.
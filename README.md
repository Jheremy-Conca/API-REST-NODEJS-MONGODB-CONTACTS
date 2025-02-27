# API de Gestión de Contactos

Este proyecto es una API simple de Gestión de Contactos construida con Node.js, Express y MongoDB. Proporciona operaciones CRUD para gestionar contactos.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/your-repo/contact-management-api.git](https://github.com/Jheremy-Conca/API-REST-NODEJS-MONGODB-CONTACTS/edit/master/README.md)
   ```

2. Navega al directorio del proyecto:
   ```sh
   cd contact-management-api
   ```

3. Instala las dependencias:
   ```sh
   npm install
   ```

## Variables de Entorno

Crea un archivo `.env` en el directorio raíz y añade las siguientes variables:

```
PORT=5000
CONNECTION_STRING=mongodb+srv://admin:admin123@fullstack.e6k4z.mongodb.net/contact_app?retryWrites=true&w=majority&appName=fullstack
```

## Ejecutar la Aplicación

Inicia el servidor con el siguiente comando:
```sh
npm start
```
El servidor se ejecutará en el puerto especificado (por defecto: `3000`).

## Endpoints de la API

### Contactos

- **GET** `/api/contacts` - Obtener todos los contactos
- **POST** `/api/contacts` - Crear un nuevo contacto
- **GET** `/api/contacts/:id` - Obtener un solo contacto por ID
- **PUT** `/api/contacts/:id` - Actualizar un contacto por ID
- **DELETE** `/api/contacts/:id` - Eliminar un contacto por ID

## Estructura del Proyecto

```
contact-management-api/
│── controllers/
│   ├── contactController.js
│── middleware/
│   ├── errorHandler.js
│── models/
│   ├── Contact.js
│── routes/
│   ├── contactRoutes.js
│── connection/
│   ├── dbConnection.js
│── .env
│── server.js
│── constants.js
│── package.json
```

## Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB con Mongoose
- dotenv para variables de entorno

## Manejo de Errores
La aplicación incluye un middleware centralizado para el manejo de errores ubicado en `middleware/errorHandler.js`.

## Licencia
Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

---

**Nota:** Asegúrate de que MongoDB esté en ejecución y que la cadena de conexión en `.env` esté correctamente configurada antes de iniciar la aplicación.


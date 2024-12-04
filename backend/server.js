const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

// Conexión a la base de datos
connectDB();

const app = express();

// Habilitar CORS
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Middlewares para parseo de datos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Configuración del puerto
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

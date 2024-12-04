// frontend/src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Ajusta según tu configuración

// Registrar usuario
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Iniciar sesión
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export default { register, login };

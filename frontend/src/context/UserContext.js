import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Iniciar sesión
const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data; // Retorna token e información del usuario
};

// Obtener perfil de usuario
const getUserProfile = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export default { login, getUserProfile };

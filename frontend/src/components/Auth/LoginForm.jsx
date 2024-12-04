import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import React, { useState } from "react";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login({ email, password });
            localStorage.setItem("token", response.token); // Guardar token
            navigate("/dashboard"); // Redirigir al Dashboard
        } catch (error) {
            console.error("Error al iniciar sesión", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
            />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
};

export default LoginForm;

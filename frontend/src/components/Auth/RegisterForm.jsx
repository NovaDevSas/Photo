import React, { useState } from "react";

const RegisterForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-center text-white">Crear Cuenta</h2>
            <input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                required
            />
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                required
            />
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-indigo-700 transition-all"
            >
                Registrarse
            </button>
        </form>
    );
};

export default RegisterForm;

import React, { useState } from "react";

const RecoverForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-center text-white">Recuperar Contraseña</h2>
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                required
            />
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-indigo-700 transition-all"
            >
                Enviar correo de recuperación
            </button>
        </form>
    );
};

export default RecoverForm;

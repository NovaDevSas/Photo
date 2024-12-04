import React from "react";

const RecoverForm = () => {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                    type="email"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Ingresa tu email"
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
                Recuperar contraseña
            </button>
        </form>
    );
};

export default RecoverForm;

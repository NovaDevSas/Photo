import React, { useState } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../styles/particlesConfig";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import RecoverForm from "./RecoverForm";
import authService from "../../services/authService"; // Servicio de autenticación para conectar al backend

const Auth = () => {
    const [activeForm, setActiveForm] = useState("login");
    const [message, setMessage] = useState("");

    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    const handleRegister = async (userData) => {
        try {
            const response = await authService.register(userData);
            console.log("Usuario registrado:", response);
            setMessage("¡Usuario registrado con éxito! Por favor, inicia sesión.");
            setActiveForm("login");
        } catch (error) {
            setMessage(error.response?.data?.message || "Error al registrar el usuario.");
        }
    };

    const handleLogin = async (userData) => {
        try {
            const response = await authService.login(userData);
            console.log("Usuario autenticado:", response);
            localStorage.setItem("token", response.token);
            // Aquí puedes redirigir al usuario o manejar la sesión
        } catch (error) {
            setMessage(error.response?.data?.message || "Error al iniciar sesión.");
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white px-4 lg:px-0 overflow-hidden">
            {/* Fondo de partículas */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    ...particlesConfig,
                    fullScreen: { enable: true, zIndex: 0 },
                }}
                className="absolute inset-0"
            />

            {/* Fondo de imágenes */}
            <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-3 gap-2 p-4 opacity-20">
                <img
                    src="https://img.freepik.com/fotos-premium/gato-disfrazado-flor-cabeza_900370-4178.jpg"
                    alt="background 1"
                    className="object-cover rounded-lg shadow-lg animate-slowZoom"
                />
                <img
                    src="https://images.pexels.com/photos/27585633/pexels-photo-27585633/free-photo-of-london-big-ben.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="background 2"
                    className="object-cover rounded-lg shadow-lg animate-slowZoom"
                />
                <img
                    src="https://images.pexels.com/photos/8832898/pexels-photo-8832898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="background 3"
                    className="object-cover rounded-lg shadow-lg animate-slowZoom"
                />
                <img
                    src="https://images.pexels.com/photos/10377281/pexels-photo-10377281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="background 4"
                    className="object-cover rounded-lg shadow-lg animate-slowZoom"
                />
                <img
                    src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                    alt="background 5"
                    className="object-cover rounded-lg shadow-lg animate-slowZoom"
                />
                <img
                    src="https://images.pexels.com/photos/12283514/pexels-photo-12283514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="background 6"
                    className="object-cover rounded-lg shadow-lg animate-slowZoom"
                />
            </div>

            {/* Tarjeta principal */}
            <div className="relative w-full max-w-md lg:max-w-lg bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 z-10 transform transition duration-500 hover:scale-105">
                {message && <p className="text-center text-red-400">{message}</p>}
                {activeForm === "login" && <LoginForm onSubmit={handleLogin} />}
                {activeForm === "register" && <RegisterForm onSubmit={handleRegister} />}
                {activeForm === "recover" && <RecoverForm />}

                {/* Navegación entre formularios */}
                <div className="mt-6 text-center text-sm text-gray-400 space-y-2">
                    {activeForm === "login" && (
                        <>
                            <p>
                                ¿No tienes una cuenta?{" "}
                                <button
                                    className="text-gray-300 hover:text-gray-100 transition-all duration-300"
                                    onClick={() => setActiveForm("register")}
                                >
                                    Crear cuenta
                                </button>
                            </p>
                            <p>
                                ¿Olvidaste tu contraseña?{" "}
                                <button
                                    className="text-gray-300 hover:text-gray-100 transition-all duration-300"
                                    onClick={() => setActiveForm("recover")}
                                >
                                    Recuperar contraseña
                                </button>
                            </p>
                        </>
                    )}
                    {(activeForm === "register" || activeForm === "recover") && (
                        <p>
                            ¿Ya tienes una cuenta?{" "}
                            <button
                                className="text-gray-300 hover:text-gray-100 transition-all duration-300"
                                onClick={() => setActiveForm("login")}
                            >
                                Iniciar sesión
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auth;

import React, { useState } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../styles/particlesConfig";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import RecoverForm from "./RecoverForm";


const Auth = () => {
    const [activeForm, setActiveForm] = useState("login");

    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    const particlesLoaded = (container) => {
        console.log("Particles loaded", container);
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white px-4 lg:px-0 overflow-hidden">
            {/* Fondo de partículas */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    ...particlesConfig,
                    fullScreen: {
                        enable: true,
                        zIndex: 0,
                    },
                }}
                className="absolute inset-0"
            />

                    {/* Fondo de imágenes */}
                    <div className="absolute inset-0 z-0 opacity-20">
    {[
        { src: "https://img.freepik.com/fotos-premium/gato-disfrazado-flor-cabeza_900370-4178.jpg", alt: "background 1", style: { top: "5%", left: "5%", width: "220px", height: "220px" } },
        { src: "https://images.pexels.com/photos/27585633/pexels-photo-27585633/free-photo-of-london-big-ben.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "background 2", style: { top: "10%", left: "40%", width: "280px", height: "280px" } },
        { src: "https://images.pexels.com/photos/8832898/pexels-photo-8832898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "background 3", style: { top: "20%", left: "70%", width: "260px", height: "260px" } },
        { src: "https://images.pexels.com/photos/10377281/pexels-photo-10377281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "background 4", style: { top: "40%", left: "10%", width: "300px", height: "300px" } },
        { src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg", alt: "background 5", style: { top: "50%", left: "50%", width: "350px", height: "350px" } },
        { src: "https://images.pexels.com/photos/12283514/pexels-photo-12283514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "background 6", style: { top: "60%", left: "80%", width: "240px", height: "240px" } },
        { src: "https://images.pexels.com/photos/8758358/pexels-photo-8758358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "background 7", style: { top: "70%", left: "20%", width: "220px", height: "220px" } },
        { src: "https://images.pexels.com/photos/27585633/pexels-photo-27585633/free-photo-of-london-big-ben.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "background 8", style: { top: "80%", left: "60%", width: "260px", height: "260px" } },
        { src: "https://images.pexels.com/photos/10482729/pexels-photo-10482729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "background 9", style: { top: "5%", left: "70%", width: "240px", height: "240px" } },
        { src: "https://images.pexels.com/photos/237369/pexels-photo-237369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "background 10", style: { top: "30%", left: "15%", width: "280px", height: "280px" } },
        { src: "https://images.pexels.com/photos/8832898/pexels-photo-8832898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "background 11", style: { top: "55%", left: "35%", width: "260px", height: "260px" } },
        { src: "https://images.pexels.com/photos/237369/pexels-photo-237369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "background 12", style: { top: "75%", left: "45%", width: "320px", height: "320px" } },
    ].map((image, index) => (
        <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={image.style}
            className="absolute object-cover rounded-lg shadow-lg animate-slowZoom"
        />
    ))}
</div>






            {/* Tarjeta principal */}
            <div className="relative w-full max-w-md lg:max-w-lg bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 z-10 transform transition duration-500 hover:scale-105">
                {activeForm === "login" && <LoginForm />}
                {activeForm === "register" && <RegisterForm />}
                {activeForm === "recover" && <RecoverForm />}

                {/* Enlaces de navegación */}
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

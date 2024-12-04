const particlesConfig = {
    fullScreen: {
        enable: true,
        zIndex: -1, // Coloca las partículas detrás del contenido
    },
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff", // Color blanco para las partículas
        },
        shape: {
            type: "circle", // Forma de las partículas
        },
        opacity: {
            value: 0.7, // Opacidad visible
            random: false,
        },
        size: {
            value: 5, // Tamaño visible
            random: true,
        },
        links: {
            enable: true, // Conexiones entre partículas
            distance: 150,
            color: "#ffffff",
            opacity: 0.5,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2, // Velocidad de movimiento
            direction: "none",
            random: false,
            straight: false,
            outMode: "bounce",
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab", // Conexión al pasar el cursor
            },
            onClick: {
                enable: true,
                mode: "push", // Añade partículas al hacer clic
            },
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.6,
                },
            },
            push: {
                quantity: 4,
            },
        },
    },
    
    retina_detect: true,
};

export default particlesConfig;

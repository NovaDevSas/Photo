import React, { createContext, useState, useEffect } from "react";
import authService from "../services/authService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUserProfile = async () => {
        try {
            const userProfile = await authService.getUserProfile();
            setUser(userProfile);
        } catch (error) {
            console.error("Error al obtener el perfil del usuario", error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            fetchUserProfile();
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

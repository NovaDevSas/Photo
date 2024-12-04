import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Bienvenido/a, {user ? user.name : "Cargando..."}</h1>
            {/* Otras funcionalidades del Dashboard */}
        </div>
    );
};

export default Dashboard;

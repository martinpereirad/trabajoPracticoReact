import React from "react";
import { Link } from "react-router-dom";
const User = () => {

    return (
        
        <div>
            <header>
                <Link to="/" className="btn btn-dark">
                    Inicio
                </Link>
                <Link to="/user" className="btn btn-dark">
                    User
                </Link>
                <Link to="/episodios" className="btn btn-dark">
                    Episodios
                </Link>
            </header>
            <hr/>
            <h1>Datos del USUARIO</h1>
        </div>
    )
}

export default User;
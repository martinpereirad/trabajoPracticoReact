import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';


const Inicio = () => {

    
    return (
        <div>
            <h1>Inicio</h1>
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
        </div>
    )
}

export default Inicio;
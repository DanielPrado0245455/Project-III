import "./Inicio_sesion.css";
import React from "react";
import {Link} from "react-router-dom";

const Iniciar_sesion = () => {
    return(
        <html>
            <body class="body-inicio">
                <div class="form">
                    <span class="form__title">Iniciar sesión</span>
                    <form action="">
                        <div class="input-group">
                            <input type="text" id="email" required class="input"/>
                            <span class="bar"></span>
                            <label for="email" class="input-label">Email</label>
                        </div>
                        <div class="input-group">
                            <input type="password" id="password" required class="input"/>
                            <span class="bar"></span>
                            <label for="password" class="input-label">Contraseña</label>
                        </div>
                        <Link to="/home" class="link_submit"><button type="submit" class="form__button">Iniciar sesión</button></Link> 
                        <span class="form__switch">
                            ¿Aún no tienes cuenta? <Link to="/Registrarse" class="link_login">Registrarse</Link>
                        </span>
                    </form>
                </div>
            </body>
        </html>
    )
}

export default Iniciar_sesion
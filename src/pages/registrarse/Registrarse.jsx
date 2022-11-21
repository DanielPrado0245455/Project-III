import "./Registrarse.css";
import React from "react";
import {Link} from "react-router-dom";

const Registrarse = () => {
    return(
        <html class="html-registro">
            <body class="body-registro">
                <div class="form-registro">
                    <span class="form__title">Registrarse</span>
                    <form action="" class="row">
                        <div class="input-group-registro">
                            <input type="text" id="name" required class="input"/>
                            <span class="bar"></span>
                            <label for="name" class="input-label">Nombre(s)</label>
                        </div>
                        <div class="input-group-registro">
                            <input type="text" id="email" required class="input"/>
                            <span class="bar"></span>
                            <label for="email" class="input-label">Email</label>
                        </div>
                        <div class="input-group-registro">
                            <input type="text" id="name" required class="input"/>
                            <span class="bar"></span>
                            <label for="name" class="input-label">Apellido Materno</label>
                        </div>
                        <div class="input-group-registro">
                            <input type="text" id="name" required class="input"/>
                            <span class="bar"></span>
                            <label for="name" class="input-label">Teléfono</label>
                        </div>
                        <div class="input-group-registro">
                            <input type="text" id="name" required class="input"/>
                            <span class="bar"></span>
                            <label for="name" class="input-label">Apellido Paterno</label>
                        </div>
                        <div class="input-group-registro">
                            <input type="password" id="password" required class="input"/>
                            <span class="bar"></span>
                            <label for="password" class="input-label">Contraseña</label>
                        </div>
                        <div class="input-group-registro">
                            <input type="text" id="name" required class="input"/>
                            <span class="bar"></span>
                            <label for="name" class="input-label">Dirección</label>
                        </div>
                        <div class="input-group-registro">
                            <input type="password" id="password" required class="input"/>
                            <span class="bar"></span>
                            <label for="password" class="input-label">Confirmar contraseña</label>
                        </div>
                        <Link to="/home" class="link_submit"><button type="submit" class="form__button-registro">Registrarse</button></Link> 
                        <span class="form__switch-registro">
                            ¿Ya tienes una cuenta? <Link to="/" class="link_login">Iniciar sesión</Link>
                        </span>
                    </form>
                </div>
            </body>
        </html>
    )
}

export default Registrarse
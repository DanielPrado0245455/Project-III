import "./Navbar.css";
import hotel from "./img/hotel.png";
import avion from "./img/avion.png";
import usuario from "./img/usuario.png";
import palmera from "./img/isla.png";
import { Link } from "react-router-dom";
import React from "react";


const Navbar = () => {
    return (
        <body class="body-navbar">
            <nav>
                <ul class="lista-navbar">
                    <Link to="/home" class="elista-navbar" style={{'--w':'#0045AD','--e':'#0045AD'}}>
                        <span class="icon span-navbar" ><img src={hotel} alt="" class="img-navbar"></img></span>
                        <span class="txt span-navbar">HOME</span>
                    </Link>
                    <Link to="/vuelos" class="elista-navbar" style={{'--w':'#0045AD','--e':'#0045AD'}}>
                        <span class="icon span-navbar"><img src={avion} alt="" class="img-navbar"></img></span>
                        <span class="txt span-navbar">VUELOS</span>
                    </Link>
                    <Link to="/hoteles" class="elista-navbar" style={{'--w':'#0045AD','--e':'#0045AD'}}>
                        <span class="icon span-navbar"><img src={hotel} alt="" class="img-navbar"></img></span>
                        <span class="txt span-navbar">HOTELES</span>
                    </Link>
                    <Link to="/recomendaciones"  class="elista-navbar" style={{'--w':'#0045AD','--e':'#0045AD'}}>
                        <span class="icon span-navbar"><img src={palmera} alt="" class="img-navbar"></img></span>
                        <span class="txt span-navbar">RECOMENDACIONES</span>
                    </Link>
                    <Link to="/cuenta" class="elista-navbar" style={{'--w':'#0045AD','--e':'#0045AD'}}>
                        <span class="icon span-navbar" ><img src={usuario} alt="" class="img-navbar"></img></span>
                        <span class="txt span-navbar">SESIÓN</span>
                    </Link>
                </ul>
            </nav>
        </body>
    )
}

export default Navbar
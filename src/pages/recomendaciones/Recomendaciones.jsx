import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Recomendaciones.css";

const Recomendaciones = () =>{
    return(
        <div class="container-recomendaciones container">
            <div>
                <Navbar/>
            </div>
            <div class="body-recomendaciones grid">
                <ul class="nav-recomendaciones">
                    <li class="nav-item-recomendaciones g-col-6 g-col-md-4">
                        <h class="titulos-recomendaciones">Lugares visitados</h>
                    </li>
                    <li class="nav-item-recomendaciones g-col-6 g-col-md-4">
                        <input placeholder="¿Dónde vives?" class="input-recomendaciones" required/>
                        <div class="validation">Requerido</div>
                    </li>
                    <li class="nav-item-recomendaciones g-col-6 g-col-md-4">
                        <h>Lugares Recomendados</h>
                    </li>
                </ul>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}

export default Recomendaciones;
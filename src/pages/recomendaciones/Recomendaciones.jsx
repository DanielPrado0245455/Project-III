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
                        <div class="wrapper">
                            <input placeholder="Visitados" class="input-recomendaciones" required/>
                            <div class="validation">*</div>
                        </div>
                    </li>
                    <li class="nav-item-recomendaciones g-col-6 g-col-md-4">
                        <div class="wrapper">
                            <input placeholder="¿Dónde vives?" class="input-recomendaciones" required/>
                            <div class="validation">*</div>
                        </div>
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
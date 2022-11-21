import "./Carrousel.css";
import cubo from "./img/cadena-de-bloques.png"
const Carrousel = () => {
    return(
        <body class="body-carrousell">
            <div id="carouselExampleCaptions" class="carousel slide contenido" data-bs-ride="false">
                <div class="carousel-inner carrousell">
                    <div class="carousel-item active">
                        <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell1">
                        <img src={cubo} alt=""/>
                        <div class="content">
                            <button>Discover</button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell2">
                        <img src={cubo} alt=""/>
                        <div class="content">
                            <button>Discover</button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell3">
                        <img src={cubo} alt=""/>
                        <div class="content">
                            <button>Discover</button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell4">
                        <img src={cubo} alt=""/>
                        <div class="content">
                            <button>Discover</button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell5">
                        <img src={cubo} alt=""/>
                        <div class="content">
                            <button>Discover</button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell6">
                        <img src={cubo} alt=""/>
                        <div class="content">
                            <button>Discover</button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div class="d-block"></div>
                        <div class="card-carrousell card-carrousell7">
                        <img src={cubo} alt=""/>
                        <div class="content">
                            <button>Discover</button>
                        </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            
        </body>
    )
}

export default Carrousel
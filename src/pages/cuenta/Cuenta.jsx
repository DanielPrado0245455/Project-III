import "./Cuenta.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Editar from "./img/escribir.png";

const Cuenta = () => {
    return(
        <div class="container-cuenta container">
            <div>
                <Navbar/>
            </div>
            <div class="container">
            <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-primary">Your cart</span>
                        <span class="badge bg-primary rounded-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Product name</h6>
                                <small class="text-muted">Brief description</small>
                            </div>
                            <span class="text-muted">$12</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 class="my-0">Second product</h6>
                            <small class="text-muted">Brief description</small>
                            </div>
                            <span class="text-muted">$8</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 class="my-0">Third item</h6>
                            <small class="text-muted">Brief description</small>
                            </div>
                            <span class="text-muted">5</span>
                        </li>
                        
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>

                
            </div>
            <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Datos de cuenta</h4>
                <form class="needs-validation" novalidate>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <div class="container-cuenta-editar">
                        <label for="firstName" class="form-label">Nombres 
                            <button class="secondary button-edit">
                                <img src={Editar} class="fa" alt=""></img>
                            </button>
                        </label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                    <div class="container-cuenta-editar">
                        <label for="lastName" class="form-label">Apellido Materno
                                <button class="secondary button-edit">
                                    <img src={Editar} class="fa" alt=""></img>
                                </button>
                        </label>
                    </div>         
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                    <div class="invalid-feedback">
                        Validar Apellido Paterno
                    </div>
                    </div>

                    <div class="col-sm-6">
                    <div class="container-cuenta-editar">
                        <label for="firstName" class="form-label">Apellido Paterno
                                <button class="secondary button-edit">
                                    <img src={Editar} class="fa" alt=""></img>
                                </button>
                        </label>
                    </div>  
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                    <div class="invalid-feedback">
                        Validar Apellido Paterno
                    </div>
                    </div>

                    <div class="col-sm-6">
                    <div class="container-cuenta-editar">
                        <label for="tel" class="form-label">Teléfono
                                <button class="secondary button-edit">
                                    <img src={Editar} class="fa" alt=""></img>
                                </button>
                        </label>
                    </div>
                    <input type="tel" class="form-control" id="tel" placeholder="" value="" required/>
                    <div class="invalid-feedback">
                        Validar Apellido Paterno
                    </div>
                    </div>

                    <div class="col-12">
                    <div class="container-cuenta-editar">
                        <label for="username" class="form-label">Username
                                <button class="secondary button-edit">
                                    <img src={Editar} class="fa" alt=""></img>
                                </button>
                        </label>
                    </div>
                    <div class="input-group has-validation">
                        <span class="input-group-text">@</span>
                        <input type="text" class="form-control" id="username" placeholder="Username" required/>
                    <div class="invalid-feedback">
                        Your username is required.
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-6">
                    <label for="firstName" class="form-label">Contraseña actual</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                    <div class="invalid-feedback">
                        Valid first name is required.
                    </div>
                    </div>

                    <div class="col-sm-6">
                    <label for="lastName" class="form-label">Nueva contraseña</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                    <div class="invalid-feedback">
                        Validar Apellido Paterno
                    </div>
                    </div>

                    <div class="col-sm-6">
                    <label for="firstName" class="form-label">Confirmar contraseña nueva</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                    <div class="invalid-feedback">
                        Validar Apellido Paterno
                    </div>
                    </div>

                    <div class="col-12">
                    <div class="container-cuenta-editar">
                    <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span>
                                <button class="secondary button-edit">
                                    <img src={Editar} class="fa" alt=""></img>
                                </button>
                        </label>
                    </div>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                    <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                    </div>

                    <div class="col-12">
                    <div class="container-cuenta-editar">
                        <label for="address" class="form-label">Dirección
                                <button class="secondary button-edit">
                                    <img src={Editar} class="fa" alt=""></img>
                                </button>
                        </label>
                    </div>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
                    <div class="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                    </div>
                </div>



                    
                

                    <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </form>

                </div>
                </div>
            </div>
            <div class="container">
                <Footer/>
            </div>
        </div>
);
};

export default Cuenta
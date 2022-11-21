import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Hoteles.css";
import React from 'react';

let url = "";

const Hoteles = () => {
    return(
        <div className="container">
            <div>
                <Navbar/>
            </div>
            <div class="body-hotel">
                <div class=" container-hotel text-center grid ">
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Sora</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://i.loli.net/2019/10/18/Ujf6n75o8TtIsWX.jpg" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Umi</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Mori</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid">
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Sora</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://i.loli.net/2019/10/18/Ujf6n75o8TtIsWX.jpg" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Umi</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Mori</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    )
}

export default Hoteles
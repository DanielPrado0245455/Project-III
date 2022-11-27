import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Carrousel from "../../components/carrousel/Carrousel";
import "./Hoteles.css";
import React from 'react';

let url = "";

const Hoteles = () => {
    return(
        <div className="container page-hotel">
            <div>
                <Navbar/>
            </div>
            <div>
                <Carrousel/>
            </div>
            <div class="body-hotel">
                <div class=" container-hotel text-center grid ">
                    <a name="1" href="#/" class="titulo-pais"><h1 class="titulo-pais">Rusia</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://i.pinimg.com/originals/87/71/6c/87716c15613cb54fcef1e1502a68bbc5.jpg" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Rocco Forte Astoria Hotel</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/335205641.webp?k=c9165039da14f5d23fc2410598166b60bb7d24fd6a65f561089cd9c9cc183598&o=&s=1" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Metropol</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/402626171.webp?k=c7f68f3286f79c71dceb1141b0bd691972c2740386a145f0f616fa585decee65&o=&s=1" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Swissotel Krasnye Holmy</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid">
                    <a name="2" href="#/" class="titulo-pais"><h1 class="titulo-pais">México</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max500/362900586.jpg?k=3b9362a4149d4a4c8f8531acb72fa80ddc5db1610f35231b8fa65edee1e524bb&o=&hp=1" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Hotel Flamenco</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://media.staticontent.com/media/pictures/1ebe2f87-3c7f-4b5e-bcc8-94dffe55c5d9" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Hotel Catedral</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/293055441.jpg?k=5a51872843e9817a8f08ab0ed3f37402e71ab8fa3ce87e0a8cb05f5a5f72ffe1&o=&hp=1s" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Kali Centro Mexico City</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid ">
                    <a name="3" href="#/" class="titulo-pais"><h1 class="titulo-pais">Francia</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/269837168.jpg?k=b1e4d2805a9804d746847e2b04b6219d48c895a1ca3797358df00aee310a8c30&o=&hp=1" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Le Basile Hôtel</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/78264832.jpg?k=d962fa20d69bca5d6348ae42a004b2e6b8e46361b4a172efb2407405ea1b5542&o=&hp=1" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Select Hotel</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/310909924.jpg?k=ac383c994989b3309f183dbf43c96fc16fca4a61260ccb68d5f4e914f6dc4e40&o=&hp=1" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Hotel Touraine Opera</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid ">
                    <a name="4" href="#/" class="titulo-pais"><h1 class="titulo-pais">Italia</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/239129719.jpg?k=c3fe595fefaa0a8448dbac5d5901b49c991859dc0bacb45b634846359e3567ff&o=&hp=1" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Speronari Suites</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/408255842.jpg?k=0369a104ff63bf785dcf13858128c7f5434aedcad93553293a731740a752f13f&o=&hp=1" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Modica Boutique Hotel</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/311281343.jpg?k=075235259eb396c3e180a08ef26b3498cf678566c4772ec29bb329700d27e898&o=&hp=1" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Hotel Astoria</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid ">
                    <a name="5" href="#/" class="titulo-pais"><h1 class="titulo-pais">Colombia</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/274814172.jpg?k=45950f9b4fa0a1903b7df42ce386d935956d7f432ef06705715030f6ae03556b&o=&hp=1" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Lettera Hotel</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/314256600.jpg?k=cba10bc5c64ed01a89bd64baac84df8f40710177dd1856931e949b10dd59bf27&o=&hp=1" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">HAB Hotel Bogotá</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/263589863.jpg?k=50049ff60d666ee6a94e2940040ae492a3718beab1c52058789a2d29a1dfead9&o=&hp=1" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">FR Hotel</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid ">
                    <a name="6"href="#/" class="titulo-pais"><h1 class="titulo-pais">Argentina</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/cd/0e/34/hotel-nuevo-ostende.jpg?w=800&h=-1&s=1" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Hotel Nuevo Ostende by bund</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/67/15/de/deluxe-falls-view-king.jpg?w=800&h=-1&s=1" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Gran Meliá Iguazú</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/3e/e2/4c/superior-room.jpg?w=1000&h=-1&s=1" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Mine Hotel Boutique</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                </div>
                <div class=" container-hotel text-center grid ">
                    <a name="7" href="#/" class="titulo-pais"><h1 class="titulo-pais">España</h1></a>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://images.trvl-media.com/lodging/2000000/1070000/1062500/1062405/47851ca6.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Sora" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Urban</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://images.trvl-media.com/lodging/5000000/4590000/4585300/4585288/1189ebd8.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Umi" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">Boutike Cibeles</h5>
                            <p class="card-text-hotel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <a href={url} class="btn-hotel">More</a>
                        </div>
                    </div>
                    <div class="card-hotel g-col-6 g-col-md-4">
                        <img src="https://images.trvl-media.com/lodging/10000000/9560000/9550100/9550091/998ee1e4.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Mori" class="card-img-top-hotel"/>
                        <div class="card-body-hotel">
                            <h5 class="card-title-hotel">The Principal Madrid</h5>
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
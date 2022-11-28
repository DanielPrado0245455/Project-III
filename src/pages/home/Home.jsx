import  Background from "./img/background.jpg";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";

let url ="";

let sectionStyle = {
    backgroundImage: "url(" + { Background } + ")"
  };

const Home = () => {
    return(
        <div>
        <div>
            <Navbar/>
        </div>
        <div class="home">
            <section class="hero section-home">
                <div class="bkg-img" style={{ backgroundImage: `url(${require("./img/background.jpg")})` }}></div>
                <div class="hero-content">
                    <h1 class="h1-home">Goa Travel</h1>
                    <h3 class="h3-home">Unmissable Tours Around Beautiful Goa</h3>
                    <a href={url} class="btn">Contact Us Now</a>
                </div>
            </section>
            <div class="accordion">
                <ul>
                <li>
                    <div>
                    <a href={url} class="sliderLink">
                        <h2>Studio Lighting</h2>
                        <p>Lighting<br></br> Light Modifiers<br></br> Light Controls<br></br> Backdrops
                        </p>
                    </a>
                    </div>
                </li>
                <li>
                    <div>
                    <a href={url} class="sliderLink">
                        <h2>Filmmaking Gear</h2>
                        <p>LED Lighting<br></br> Scrim Jim Cine<br></br> Chroma-Key
                        </p>
                    </a>
                    </div>
                </li>
                <li>
                    <div>
                    <a href={url} class="sliderLink">
                        <h2>Speedlight Modifiers</h2>
                        <p>Apollo<br></br> LunaGrip
                        <br></br> Rapid Box</p>
                    </a>
                    </div>
                </li>
                <li>
                    <div>
                    <a href={url} class="sliderLink">
                        <h2>Travel Photography</h2>
                        <p>Rapid Box<br></br> Reflectors
                        <br></br> Cases
                        </p>
                    </a>
                    </div>
                </li>
                <li>
                    <div>
                    <a href={url} class="sliderLink">
                        <h2>Newborn Photography</h2>
                        <p>Props<br></br> Backdrops
                        <br></br> Lighting
                        </p>
                    </a>
                    </div>
                </li>
                <li>
                    <div>
                    <a href={url} class="sliderLink">
                        <h2>Photo Enthusiast</h2>
                        <p>CFL Lighting<br></br> Reflectors
                        <br></br> Backdrops
                        </p>
                    </a>
                    </div>
                </li>
                </ul>
            </div>

            <section class="destinations section-home">
                <h3 class="title h3-home">Some Of Our Destinations</h3>
                <p class="p-home">Love the surf and sand? History buff? Nature enthusiast? Thrill seeker interested in water sports, dolphin sightseeing, backwater kayaking, parasailing, and scuba diving? Goa has something for everyone</p>
                <hr></hr>
                <ul class="grid">
                <li class="small" style={sectionStyle}></li>
            <li class="large" style={sectionStyle}>
                
            </li>
                    <li class="large" style={sectionStyle}></li>
                    <li class="small" style={sectionStyle}></li>
                </ul>	
                
            </section>

                                                                    
            <section class="packages section-home">
            <h3 class="title h3-home">Tour Packages</h3>		
            <p class="p-home">We offer a variety of sightseeing and immersion packages. Whether you want to experience the rich culture, immerse yourself in it's natural beauty, or have a relaxing visit, we've got the perfect vacation for you</p>
            <hr></hr>
            <ul class="grid">
                <li>
                    <i class="fa fa-compass fa-4x"></i>
                    <h4>Guided Tours</h4>
                    <p class="p-home">Looking for the complete experience? Take a tour with one of our experts. Visit the beautiful old temples and churches and the numerous beaches. Sample the local dishes and visit various health or spa retreats to pamper yourself on your vacation. </p>
                </li>
                <li>
                    <i class="fa fa-camera-retro fa-4x"></i>
                    <h4>Photo Tours</h4>
                    <p class="p-home">Want to experience nature's beauty without all the trekking, walking and waiting? Take a photo tour on one of our luxury buses.</p>
                </li>
                <li>
                    <i class="fa fa-motorcycle fa-4x"></i>
                    <h4>Bike Tours</h4>
                    <p class="p-home">A fun  way to experience the local atmosphere while seeing as much of Goa as you can. We'll provide the bikes and lunch too!</p>
                </li>
                <li>
                    <i class="fa fa-binoculars fa-4x"></i>
                    <h4>Safari Tours</h4>
                    <p class="p-home">Looking to see some wildlife? We offer fantastic safari trips! Spend a day out cruising along the back waters of the Zuari River in a giant canoe, returning to camp in the evening to retell your adventures next to the campfire!</p>
                </li>
            </ul>
            </section>	

            <section class="testimonials section-home">
                <h3 class="title h3-home">Testimonials from Goa travellers:</h3>
                <hr></hr>
                <p  class="quote p-home">A most wonderful place although I gather greatly different to northern India-the people were lovely(although immense haggling which was fun when we caught on)stunning and must go back!</p>
                <p  class="author p-home">-Amanda D'Cunha</p>
                <p  class="quote p-home">We loved everything about Goa, the people are the best we've ever met. The Elephant trip was really good - a must for anyone.</p>
                <p  class="author p-home">-Angelo Fernandes</p>
                <p  class="quote p-home">Very well framed and arranged tour package, I find everything in it like delicious food,spacious rooms,well maintained, disciplined behaviors, well planned vehicles for site scenes. Nothing more to say, contains all things for a travelers.</p>
                <p  class="author p-home">-Diana Monteiro</p>
            </section>

        </div>
        </div>
    )
}

export default Home
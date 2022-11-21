import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";


const Home = () => {
    return(
        <div className="container">
            <div>
                <Navbar/>
            </div>
            
            <div>
                <Footer/>
            </div>
            
        </div>
    )
}

export default Home
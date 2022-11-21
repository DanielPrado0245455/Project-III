import {Routes, Route, BrowserRouter} from "react-router-dom";
import Hoteles from "./pages/hoteles/Hoteles.jsx";
import Vuelos from "./pages/vuelos/Vuelos.jsx";
import Inicio from "./pages/iniciar_sesion/Inicio_sesion.jsx";
import Home from "./pages/home/Home.jsx";
import Registrarse from "./pages/registrarse/Registrarse.jsx";
import Cuenta from "./pages/cuenta/Cuenta.jsx";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Inicio/>}/>
        <Route path="/hoteles" element={<Hoteles/>}/>
        <Route path="/vuelos" element={<Vuelos/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Registrarse" element={<Registrarse/>}/>
        <Route path="/cuenta" element={<Cuenta/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Vuelos.css";
import imgaero from "./img/aeromexico.png"
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Vuelos = () => {
  const vuelo = [
    {
      id: 1,
      destino: "México",
      aerolinea: "Aeromexico",
      vuelo: "1A",
      hora: "17:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: "https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg"
    },
    {
      id: 2,
      destino: "México",
      aerolinea: "Aeromexico",
      vuelo: "2A",
      hora: "17:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: imgaero,
    },
    {
      id: 3,
      destino: "México",
      aerolinea: "Aeromexico",
      vuelo: "3A",
      hora: "17:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: imgaero,
    },
    {
      id: 5,
      destino: "México",
      aerolinea: "Aeromexico",
      vuelo: "5A",
      hora: "17:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: imgaero,
    },
    {
      id: 4,
      destino: "México",
      aerolinea: "Aeromexico",
      vuelo: "4A",
      hora: "17:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: imgaero,
    },
    {
      id: 8,
      destino: "México",
      aerolinea: "Aeromexico",
      vuelo: "8A",
      hora: "17:00pm",
      estatus: "Disponible",
      fecha: "10/11/2022",
      img: imgaero,
    },
  ];
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { user } = useContext(AuthContext);
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  console.log(vuelo[0]);
  const buyFlights = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:5000/api/vuelos/" + user._id;
      selectedRooms.forEach((element) => axios.post(url, vuelo[element]));
      navigate("/cuenta");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        {vuelo.map((carrito, e) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{carrito.id}</th>
                  <td>{carrito.aerolinea}</td>
                  <td>{carrito.destino}</td>
                  <td>{carrito.aerolinea}</td>
                  <td>{carrito.vuelo}</td>
                  <td>{carrito.hora}</td>
                  <td>{carrito.estatus}</td>
                  <td>{carrito.fecha}</td>
                  <td><img src="{carrito.img}" alt="" /></td>
                  <td>
                    <input
                      type="checkbox"
                      value={carrito.id}
                      onChange={handleSelect}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      <button onClick={buyFlights}>asdfffffffff</button>
      <div class="container">
        <Footer />
      </div>
    </>
  );
};

export default Vuelos;

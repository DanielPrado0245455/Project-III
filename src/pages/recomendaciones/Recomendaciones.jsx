import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import React, { useState } from "react";
import "./Recomendaciones.css";

const Recomendaciones = () => {
  const [chunks, setChunks] = useState(["Nochunks"]);
  const [cityCode, setcityCode] = useState("MEX");
  const [travelerCountryCode, setTravelerCountryCode] = useState("FR");

  let formData = JSON.stringify({
    cityCodes: cityCode,
    travelerCountryCode: travelerCountryCode,
  });
  return (
    <div class="container-recomendaciones container">
      <div>
        <Navbar />
      </div>
      <div class="body-recomendaciones grid">
        <ul class="nav-recomendaciones">
          <li class="nav-item-recomendaciones g-col-6 g-col-md-4">
            <h class="titulos-recomendaciones">Lugar visitados</h>
            <div class="wrapper">
              <input
                placeholder="Visitados"
                class="input-recomendaciones"
                onChange={(event, value) => {
                  setcityCode(event.target.value);
                }}
                required
              />
              <div class="validation">*</div>
            </div>
          </li>
          <li class="nav-item-recomendaciones g-col-6 g-col-md-4">
          <h class="titulos-recomendaciones">Lugar de Residencia</h>
            <div class="wrapper">
              <input
                placeholder="¿Dónde vives?"
                class="input-recomendaciones"
                onChange={(event, value) => {
                  setTravelerCountryCode(event.target.value);
                }}
                required
              />
              <div class="validation">*</div>
            </div>
          </li>
          <li class="nav-item-recomendaciones g-col-6 g-col-md-4">
            <h1 class="h1-recomendaciones"><b>Lugares Recomendados</b></h1>
            {chunks.map((data) => (
              <p>{data["name"]}</p>
            ))}
          </li>
        </ul>
        <input
          type="submit"
          onClick={(event, value) => {
            fetch(" http://127.0.0.1:7000/", {
              method: "POST",
              mode: "cors",
              headers: { "Content-Type": "application/json" },
              body: formData,
            }).then((response) => {
              response.json().then((data) => {
                setChunks(data);
              });
            });
          }}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Recomendaciones;

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Vuelos.css";
import DataTable from "react-data-table-component";
import Aeromexico from "./img/aeromexico-logo.png";
import React from 'react';


const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            backgroundColor:"#257AFA",
            color:"#E6F5FF",
        },
    },
    headCells: {
        style: {
            paddingLeft: '2.1px', // override the cell padding for head cells
            paddingRight: '8px',
            backgroundColor:"#0045AD",
            color:"#E6F5FF",
            fontSize: '14px',
			fontWeight: 500,

            
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            color:"#E6F5FF",
        },
    },
    header: {
		style: {
			color: "#0045AD",
            fontSize: '25px',
			fontWeight: 800,
		},
	},
};

const tablaVuelos = [
    {id:1, destino:"México", aerolinea:"Aeromexico", vuelo:"1A", hora:"17:00pm", estatus:"Disponible", fecha:"10/11/2022", img:Aeromexico, check:""},
    {id:2, destino:"México", aerolinea:"Aeromexico", vuelo:"1A", hora:"17:00pm", estatus:"Disponible", fecha:"10/11/2022", img:Aeromexico, check:""},
    {id:3, destino:"México", aerolinea:"Aeromexico", vuelo:"1A", hora:"17:00pm", estatus:"Disponible", fecha:"10/11/2022", img:Aeromexico, check:""},
    {id:5, destino:"México", aerolinea:"Aeromexico", vuelo:"1A", hora:"17:00pm", estatus:"Disponible", fecha:"10/11/2022", img:Aeromexico, check:""},
    {id:4, destino:"México", aerolinea:"Aeromexico", vuelo:"1A", hora:"17:00pm", estatus:"Disponible", fecha:"10/11/2022", img:Aeromexico, check:""},
    {id:8, destino:"México", aerolinea:"Aeromexico", vuelo:"1A", hora:"17:00pm", estatus:"Disponible", fecha:"10/11/2022", img:Aeromexico, check:""},

];

const columnas = [
    {
        name:"ID",
        selector:"id",
        sortable: true
    },
    {
        name:"Destino",
        selector:"destino",
        sortable: true
    },
    {
        name:"Aerolinea",
        selector:"aerolinea",
        sortable: true
    },
    {
        name:"Vuelo",
        selector:"vuelo",
        sortable: true
    },
    {
        name:"Hora",
        selector:"hora",
        sortable: true
    },
    {
        name:"Estatus",
        selector:"estatus",
        sortable: true
    },
    {
        name:"Fecha",
        selector:"fecha",
        sortable: true
    },
    {  
        name:"Imagen",
        selector: (row) => <img class="img-table" src={row.img} alt=""/>,
        sortable: true
    },
    {
        name: "Agregar",
        style:{justifyContent:"center", marginRight: '25px',},
        selector: (row) => <label class="label-checkbox"><input class="checkbox-input" type="checkbox"/><span class="checkbox"></span></label>,
        sortable: true
        
    }
];


const paginacionOpciones={
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}


const Vuelos = () => {
    return(
        <div className="container">
            <div>
                <Navbar/>
            </div>
            <div class="table-responsive table">
                <DataTable 
                columns={columnas}
                data={tablaVuelos}
                title="Vuelos"
                pagination
                paginationComponentOptions={paginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                customStyles={customStyles}
                />
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    )
}

export default Vuelos
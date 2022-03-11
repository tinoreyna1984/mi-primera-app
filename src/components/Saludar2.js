import React from "react";

// uso de props en objetos

function Saludar2(props){
    
    return (
        <>
        Nombre: {props.dataUsuario.nombre} <br/>
        Edad: {props.dataUsuario.edad} <br/>
        Correo: {props.dataUsuario.correo} <br/>
        </>
    );
}

export default Saludar2;
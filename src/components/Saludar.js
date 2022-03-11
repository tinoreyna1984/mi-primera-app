import React from "react";

// uso de props en variables

function Saludar(props){
    //console.log('Hola, ' + props.name);
    return (
        <>
        Hola, {props.name} <br/>
        </>
    );
}

// propiedad por defecto (aplicada para name)
Saludar.defaultProps = {
    name: "usuario"
};

export default Saludar;

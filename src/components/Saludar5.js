import React from "react";

export default function Saludar4(props)
{
    const {persona} = props;
    const {nombre, correo} = persona;
    var cadena = `Nombre: ${nombre}, Correo: ${correo}`;
    return(
        <>
        {cadena} <br/>
        </>
    );
}

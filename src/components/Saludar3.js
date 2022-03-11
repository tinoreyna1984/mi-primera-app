import React from "react";

export default function Saludar3(props){
    return(
        <>
        <button onClick={() => props.saludoFn(props.persona.nombre)}>
        Saludar
        </button>
        </>
    );
}

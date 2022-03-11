import React from 'react';

// props por defecto

export default function Presentacion(props)
{
    return(
        <>
        Mi nombre es {props.name} y tengo {props.age} años. <br/>
        </>
    );
}

Presentacion.defaultProps = {
    name: "Tino",
    age: 37,
};

import React from "react";

/**
 * Asignacion por desestructuracion: funcionara igual que Saludar3, pero las variables
 * en el componente se obtendran por desestructuracion y con ello el codigo se ve
 * mas limpio
 */

export default function Saludar4(props) {

  // Notese que las variables las he obtenido con el operador desestructuracion (llaves)

  const { saludoFn, persona } = props;
  const { nombre = 'Tino' } = persona; // se le puede asignar tambien un valor por defecto

  return (
    <>
      <button onClick={() => saludoFn(nombre)}>Saludar</button>
      {/* Funciona como Saludar3, pero esta mas ordenado */}
    </>
  );
}

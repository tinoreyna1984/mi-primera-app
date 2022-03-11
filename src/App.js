import logo from './logo.svg';
import './App.css';
import HolaMundo, { OtroMensaje } from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';
import Presentacion from './components/Presentacion';
import Saludar2 from './components/Saludar2';
import Saludar3 from './components/Saludar3';
import Saludar4 from './components/Saludar4';
import Saludar5 from './components/Saludar5';

/** 
 * Programa de prueba para aprender React JS
 */

function App() {

  var edad = 45;
  var nombre = 'Luis';

  var persona = {
    nombre: "Tino",
    edad: 37,
    correo: 'tinoreyna1984@gmail.com'
  };

  // para Saludar3
  const saludoFn = (nombre) => {
    alert("Hola, " + nombre);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < HolaMundo />
        < OtroMensaje /> {/* Se importa con llaves cuando no es default */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        < Saludar name="Tino" />
        < Saludar name="Gaby" />
        < Saludar /> {/* uso el parametro por defecto */}
        < Presentacion name="Pepe" />
        < Presentacion name={nombre} age={edad} />
        < Saludar2 dataUsuario={persona} />
        < Saludar3 persona={persona} saludoFn={saludoFn} />
        < Saludar4 persona={persona} saludoFn={saludoFn} />
        < Saludar5 persona={persona} />
        < AdiosMundo />
      </header>
    </div>
  );
}

export default App;

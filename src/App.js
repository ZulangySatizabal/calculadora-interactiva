import "./App.css";
import calculator_logo from "./img/calculator_logo.svg";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BtnClear from "./components/BtnClear";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) { //si cadena vacia(input) = falso
      setInput(evaluate(input));
    }else{
      alert("Por favor ingrese valores para realizar el calculo");
    }
  };

  return (
    <div className="App">
      <div className="container_logo">
        <img
          className="calculator_logo"
          src={calculator_logo}
          alt="calculadora logo"
        />
        <h1 className="calculator_title">Calculadora</h1>
      </div>
      <div className="container_calculator">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BtnClear manejarClear={() => setInput("")}>Borrar</BtnClear>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

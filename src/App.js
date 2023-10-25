import './App.css';
import Calculadora from './components/Calculadora';
import calculator_logo from './img/calculator_logo.svg';

function App() {
  return (
    <div className='App'>
      <div className='container_logo'>
        <img className='calculator_logo' src={calculator_logo} alt='calculadora logo' />
        <h1 className='calculator_title'>Calculadora</h1>
      </div>
      <div className='container_calculator'>
        <Calculadora />
      </div>
    </div>
  );
}

export default App;

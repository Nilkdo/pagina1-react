import logo from './logo.svg';
import './App.css';
import Nosotros from './components/Nosotros';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Contactos from './components/Contactos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Colchones.sas
        </p>
        <Nosotros/>
        <Mision/>
        <Vision/>
        <Contactos/>
      </header>
    </div>
  );
}

export default App;

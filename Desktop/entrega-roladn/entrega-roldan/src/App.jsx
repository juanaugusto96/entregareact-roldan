import './App.css';
import ComponenteDos from './components/ComponenteDos';
import ComponenteUno from './components/ComponenteUno';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ComponenteUno />
      <ComponenteDos prop_greeting={"componente 2"} />
    </div>
  );
}

export default App;

import logo from './assets/img/logo.svg';
import './assets/css/App.css';

/* importar componentes  */
import MostrarPolizasListas from './components/MostrarPolizasListas';

function App() {
  return (
    /*   mostrar lista de polizas */
      <section className="MostrarPolizasListas">
        <MostrarPolizasListas/>
      </section>
   

    
  );
}

export default App;

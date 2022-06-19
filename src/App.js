import Principal from './components/Principal';
import Grafica1 from './components/Grafica1';
import Grafica2 from './components/Grafica2';
import Pivot from "./components/Pivot";
import Menu from "./components/Menu";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" 

function App() {
  return (


    <div className="App">
      <header className="App-header">
        <Menu/>
        <section className="componentes">
            <Pivot></Pivot>   
        </section>
      </header>
    </div>
  );
}

export default App;
 

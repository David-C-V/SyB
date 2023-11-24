import logo from "./img/logo.png";
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Productos from "./components/Productos";
import Citas from "./components/Citas";
import Paquetes from "./components/Paquetes";

function App() {
    return (
      <div className="inicio">
        <section class="menu">
          <Router>
            <header>
              <nav id="menu">
                <label for="" Clas="logo">
                  <img src={logo} alr="LogoSyB"/>
                </label>
                <div className="link">
                  <Link style={{ marginLeft: "20px"}}to="/productos">Productos</Link>
                  <Link style={{ marginLeft: "20px"}}to="/servicios">Servicios</Link>
                  <Link style={{ marginLeft: "20px"}}to="/citas">Citas</Link>
                  
                </div>
              </nav>
            </header>
            <Routes>
              <Route path="/productos"exact Component={Productos}></Route>
              <Route path="/servicios"exact Component={Paquetes}></Route>
              <Route path="/Citas"exact Component={Citas}></Route>
            </Routes>
          </Router>
        </section>
        
       
       
        </div>
  );

}


export default App;

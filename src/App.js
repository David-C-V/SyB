import logo from "./img/logo.png";
import './App.css';


function App() {
    return (
      <div className="inicio">
        
        <img src={logo} alt="logo" id="logo" />
        <h1>Salud y Belleza</h1>
        <h2>
        Esta compañía está enfocada en apoyar a tu salud, 
        ya que contamos con varios tratamientos como: planes 
        de alimentación personalizados, mesoterapia, madero 
        terapia, acupuntura, copas colombianas, masajes reductivos 
        con aparatología, entre otros servicios los cuales los podrás 
        ver en el menú de servicio.</h2>
        <h2>
        También contamos con una gran variedad de productos de 
        belleza para tu cabello: como el óleo capilar, crema nutritiva, 
        shampo…. para tu cara: cremas nutritivas, lápiz labial, sombra, 
        rimen... para tu cuerpo: cremas hidratantes, cremas exfoliantes, 
        desodorantes, perfumes, protector solar… todos esto productos y 
        más los puedes ver en el menú de Productos. 
        </h2>
        </div>
  );

}


export default App;

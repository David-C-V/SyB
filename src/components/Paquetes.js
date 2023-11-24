import "../App.css";
import React from "react";
import Imgs from "../img/img-servicios.png";

const Paquetes = () => {
  return (
    <div>
      <div class="titleContainer">
        <h1>Servicios</h1>
        <p>
           Los mejores servicios, al mejor costo, con el 
           mejor personal altamente calificado
        </p>
        <section class="articleContainer">
          <article>
            <div class="container-items">
              <div class="item">
                <figure>
                  <img src={Imgs} alt="producto" />
                </figure>
                <div class="info-product">
                  <h2>Servicios</h2>
                  <p class="price">$100</p>
                  <button>Más</button>
                </div>
              </div>
              <div class="item">
                <figure>
                  <img src={Imgs} alt="producto" />
                </figure>
                <div class="info-product">
                  <h2>Servicios</h2>
                  <p class="price">$200</p>
                  <button>Más</button>
                </div>
              </div>
              <div class="item">
                <figure>
                  <img src={Imgs} alt="producto" />
                </figure>
                <div class="info-product">
                  <h2>Servicios</h2>
                  <p class="price">$150</p>
                  <button>Más</button>
                </div>
              </div>
            </div>
            <div class="container-items">
              <div class="item">
                <figure>
                  <img src={Imgs} alt="producto" />
                </figure>
                <div class="info-product">
                  <h2>Servicios</h2>
                  <p class="price">$100</p>
                  <button>Más</button>
                </div>
              </div>
              <div class="item">
                <figure>
                  <img src={Imgs} alt="producto" />
                </figure>
                <div class="info-product">
                  <h2>Servicios</h2>
                  <p class="price">$200</p>
                  <button>Más</button>
                </div>
              </div>
              <div class="item">
                <figure>
                  <img src={Imgs} alt="producto" />
                </figure>
                <div class="info-product">
                  <h2>Servicios</h2>
                  <p class="price">$150</p>
                  <button>Más</button>
                </div>
              </div>
            </div>
            <div class="container-items">
              <div class="item">
                <figure>
                  <img src={Imgs} alt="producto" />
                </figure>
                <div class="info-product">
                  <h2>Servicios</h2>
                  <p class="price">$100</p>
                  <button>Más</button>
                </div>
              </div>
              <div class="item">
                <figure>
                  <img src={Imgs} alt="producto" />
                </figure>
                <div class="info-product">
                  <h2>Servicios</h2>
                  <p class="price">$200</p>
                  <button>Más</button>
                </div>
              </div>
              <div class="item">
                <figure>
                  <img src={Imgs} alt="producto" />
                </figure>
                <div class="info-product">
                  <h2>Servicios</h2>
                  <p class="price">$150</p>
                  <button>Más</button>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Paquetes;

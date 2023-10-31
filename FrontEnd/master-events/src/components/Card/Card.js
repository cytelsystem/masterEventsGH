import React, {useContext} from "react";
import "./Card.scss";
import {DataContext} from "../../DataContext";

function Card() {
  const {configuracion} = useContext(DataContext);

  return (
    <div
      id="ContenedorEventos"
      className="container-fluid servicios-contenedor-fluid"
    >
      <div id="ContenedorCard" className="container container-servicios">
        <div className="encabezadocard">
          <small>CONOCE NUESTROS</small>
          <h2>EVENTOS</h2>
        </div>
        <div id="cont-row" className="row">
          {configuracion.servicios.card.map((detalle) => (
            <div id="card" className="element-card" key={detalle.id}>
              <div
                id="imagen"
                className="card-imagen"
                style={{
                  backgroundImage: `url(${configuracion.img.linkImg}${detalle.imagen})`,
                }}
              ></div>
              <div id="body" className="element-card-text">
                <br />
                <h3>{detalle.titulo}</h3>

                <hr className="linea"/>
                <br />

                <div className="detallesevent">
                  <div className="fecha">
                    <div className="fecha-mes">Mar</div>
                    <div className="fecha-dia">31</div>
                    <div className="fecha-mesAno">Oct 2023</div>
                  </div>
                  <div className="contbodyizquierdo">
                    <div className="lugar">{detalle.lugar}</div>
                    <div className="button">
                      <a href={`/eventos/detalle/${detalle.id}`} type="button">
                        Ver Detalles
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

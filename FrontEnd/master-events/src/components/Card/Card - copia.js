import React, { useContext } from "react";
import "./Card.scss";
import { DataContext } from "../../DataContext";

function Card() {
  const { configuracion } = useContext(DataContext);

  // Verifica si configuracion es nulo o indefinido
  if (!configuracion) {
    return <div>No hay configuración disponible.</div>;
  }

  return (
    <div id="ContenedorEventos" className="container-fluid servicios-contenedor-fluid">
      <div id="ContenedorCard" className="container container-servicios">
        <div className="encabezadocard">
          <small>CONOCE NUESTROS</small>
          <h2>EVENTOS</h2>
        </div>
        <div id="cont-row" className="row">
          {configuracion.map((detalle) => {
            // Encuentra la imagen con los últimos 3 dígitos del nombre antes de la extensión como "800"
            const image800 = detalle.images.find((image) => {
              const parts = image.url.split("/");
              const filename = parts[parts.length - 1];
              const imagencard = filename.slice(-7, -4) === "327"
              console.log("imagencard", imagencard)
              return imagencard;
            });

            return (
              <div id="card" className="element-card" key={detalle.id}>
                <div
                  id="imagen"
                  className="card-imagen"
                  style={{
                    backgroundImage: `url(${image800 ? image800.url : ""})`,
                  }}
                ></div>
                <div id="body" className="element-card-text">
                  <br />
                  <h3>{detalle.titulo}</h3>

                  <hr className="linea" />
                  <br />

                  <div className="detallesevent">
                    <div className="fecha">
                      <div className="fecha-mes">
                        {new Date(detalle.fecha).toLocaleString("default", {
                          month: "short",
                        })}
                      </div>
                      <div className="fecha-dia">
                        {new Date(detalle.fecha).getDate()}
                      </div>
                      <div className="fecha-mesAno">
                        {new Date(detalle.fecha).toLocaleString("default", {
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;

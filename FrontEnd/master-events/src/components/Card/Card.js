import React, { useContext, useState } from "react";
import "./Card.scss";
import { DataContext } from "../../DataContext";
import ModalCard from "./ModalCard";

function Card() {
  const { randomEvent } = useContext(DataContext);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Comprobar si configuracion es null o undefined
  if (!randomEvent) {
    return null; // O cualquier otro manejo de error que prefieras
  }

  // Función para mostrar el modal con los datos del evento seleccionado
  const showEventModal = (event) => {
    setSelectedEvent(event);
    setModalShow(true);
  };

  return (
    <div id="ContenedorEventos">
      <div id="ContenedorCard">
        <div className="encabezadocard">
          <small>CONOCE NUESTROS</small>
          <h2>EVENTOS</h2>
        </div>
        <div id="cont-row">
          {randomEvent.map((evento, index) => {
            // Filtra las imágenes que contienen "1230" en su URL
            const imagenesFiltradas = evento.images.filter((imagen) =>
              imagen.url.includes("327")
            );
            const imagenURL = imagenesFiltradas.length > 0 ? imagenesFiltradas[0].url : "";

            return (
              <div id="card" key={evento.id}>
                <div
                  id="imagen"
                  className="card-imagen"
                  style={{
                    backgroundImage: `url(${imagenURL})`,
                  }}
                ></div>
                <div id="body">
                  <h3>{evento.nameEvent}</h3>
                  <div className="linea"></div>
                  <div className="detallesevent">
                    <div className="fecha">

                      <div className="fecha-mes">
                        {new Date(evento.date).toLocaleString("default", {
                          month: "short",
                        })}
                      </div>
                      <div className="fecha-dia">
                        {new Date(evento.date).getDate()}
                      </div>
                      <div className="fecha-mesAno">
                        {new Date(evento.date).getFullYear()}
                      </div>
                    </div>
                    <div className="contbodyizquierdo">
                      {/* <div className="lugar">{evento.location}</div> */}
                      <h3 className="lugar">{evento.location}</h3>
                      <div className="button" onClick={() => showEventModal(evento)}>
                        <a href="#" type="button">
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

      {modalShow && (
              <ModalCard show={modalShow} onHide={() => setModalShow(false)} event={selectedEvent} />
      )}

      {/* {modalShow && selectedEvent && (
        <ModalCard
          show={modalShow}
          onHide={() => setModalShow(false)}
          event={selectedEvent} // Pasa el evento seleccionado como prop
        />
      )} */}

    </div>
  );
}




export default Card;

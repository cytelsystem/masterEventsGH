import React from "react";
import './ModalCard.scss';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ModalCard(props) {
  const { show, event, onHide } = props;

  const imagenesFiltradas = event.images.filter((imagen) =>
    imagen.url.includes("600")
  );
  const imageUrl = imagenesFiltradas.length > 0 ? imagenesFiltradas[0].url : "";


  const date = new Date(event.date);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return (
    <Modal show={show}   onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered  >
      <Modal.Header closeButton >
        <div className="title-container">
          <div className="title-image">
            <img src={imageUrl} alt={event.nameEvent} />
          </div>
          <div className="title-info">
            <h2 className="h2mio">{event.nameEvent}</h2>
            <p>{event.description}</p>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="body-container">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <div className="field">
                  <h5>Fecha:</h5>
                  <p>{formattedDate}</p>
                </div>
                <div className="field">
                  <h5>Categoría:</h5>
                  <p>{event.category}</p>
                </div>
                <div className="field">
                  <h5>Lugar:</h5>
                  <p>{event.location}</p>
                </div>
                <div className="field">
                  <h5>Dirección:</h5>
                  <p>{event.address}</p>
                </div>
                <div className="field">
                  <h5>Edad Mínima:</h5>
                  <p>{event.minimumAge} <span>Años</span></p>
                </div>
              </Col>
               <Col className="modal-card-button" xs={12} md={4}>

                  <div className="buy-button-container">
                    <Button variant="primary" style={{ backgroundColor: "#FF6C00" }}>
                      Comprar
                    </Button>
                  </div>

              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalCard;

import React, { useContext, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ComponentCarousel.scss';
import { DataContext } from '../../DataContext';

function ComponentCarousel() {
  const { configuracion } = useContext(DataContext);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente índice. Asegúrate de que no sobrepases el límite.
      if (index < configuracion.carousel.diapositivas.length - 1) {
        setIndex(index + 1);
      } else {
        // Vuelve al primer índice cuando llegues al final.
        setIndex(0);
      }
    }, 5000); // Cambiar la imagen cada 5 segundos (ajusta este valor según tus necesidades).

    // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria.
    return () => clearInterval(interval);
  }, [index, configuracion.carousel.diapositivas.length]);

  return (
    <div className="ComponentCarousel">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        {configuracion.carousel.diapositivas.map((detalle) => {
          return (
            <Carousel.Item key={detalle.id}>
              <img
                className="d-block w-100"
                src={`${configuracion.img.linkImg}${detalle.imagen}`}
                alt={detalle.alt}
              />
              <Carousel.Caption>
                <h3>{detalle.descripcion}</h3>
              </Carousel.Caption>
              <div className="overlay">
                {/* Resto del contenido del carousel */}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ComponentCarousel;

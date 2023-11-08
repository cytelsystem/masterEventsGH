import React, { useContext, useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ComponentCarousel.scss';
import { DataContext } from '../../DataContext';

function ComponentCarousel() {
  const { randomEvent } = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const maxImagesToShow = 10; // Número máximo de imágenes a mostrar
  const [filteredImages, setFilteredImages] = useState([]);
  const intervalRef = useRef(null); // Ref para mantener una referencia persistente al intervalo

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Filtra las imágenes cuyos nombres contienen "1230" antes de la extensión
    const filtered = randomEvent
      ? randomEvent
          .flatMap((evento) =>
            evento.images.filter((image) =>
              /1230\.(jpg|jpeg|png|gif|webp)$/i.test(image.url)
            )
          )
          .slice(0, maxImagesToShow) // Limita la cantidad de imágenes mostradas a 6
      : [];

    setFilteredImages(filtered);
  }, [randomEvent, maxImagesToShow]);

  // Vuelve al primer índice cuando llegas al final del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < filteredImages.length - 1) {
          return prevIndex + 1;
        } else {
          return 0; // Vuelve al primer índice cuando llegues al final
        }
      });
    }, 5000); // Cambiar la imagen cada 5 segundos (ajusta este valor según tus necesidades).

    // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria.
    return () => clearInterval(interval);
  }, [filteredImages]);

  return (
    <div className="ComponentCarousel">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        {filteredImages.map((image, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={image.url}
                alt={`Slide ${i}`}
              />
              <Carousel.Caption>
                {/* Puedes agregar el título y descripción del evento aquí si es necesario */}
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

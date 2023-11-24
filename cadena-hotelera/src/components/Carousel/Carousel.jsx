import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Dormitorios from "../../assets/Dormitorios.jpg";
import Desayuno from "../../assets/Desayuno.jpg";
import Recepcion from "../../assets/Recepcion.jpg";
import './StylesCarousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="d-flex row justify-content-center">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="bg-light p-2 rounded col-8"
      >
        <Carousel.Item>
          <div>
            <img src={Dormitorios} width="100%" height="100%"></img>
          </div>
          <Carousel.Caption>
            <h3>Dormitorios</h3>
            <p className="text-light">
              Incluso en el apocalipsis, la maxima comodidad es un lujo posible,
              compruebalo con nuestros lugubres pero acojedores dormitorios.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img src={Desayuno} width="100%" height="100%"></img>
          </div>
          <Carousel.Caption>
            <h3>Desayunos</h3>
            <p className="text-light">
              Los tiempos dificiles hacen que lo poca e insipida comida sea lo
              mejor. Nuestra comida no es poca, mas que eso, es deliciosa, solo lo mejor, para ti en el Apocalipsis!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img src={Recepcion} width="100%" height="100%"></img>
          </div>
          <Carousel.Caption>
            <h3>Recepcion</h3>
            <p className="text-light">
              En un mundo roto, el saludo mas grato es el del peligro de morir. Nuestra recepcion te protejera y acompañara en todo momento, nuestro pequeño arsenal de artilleria te mantendra a salvo, de la muerte y la locura.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;

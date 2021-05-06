import React, {useState} from "react";
import {Carousel} from "react-bootstrap"
function CarousalPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//static.ieplads.com/bmsjs/banners/99acres-hp/1366/1366-alind-gen-5-v2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Explore</h3>
          <p>Welome to expRSL</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//static.ieplads.com/bmsjs/banners/99acres-hp/1920/1920-alind-gen-11-v2.jpg"
          alt="Explore"
        />

        <Carousel.Caption>
          <h3>Area</h3>
          <p>
          Lease your land ,Malls etc.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//static.ieplads.com/bmsjs/banners/99acres-hp/1366/1366-alind-gen-12-v2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>House</h3>
          <p>
          Exprloring is easy now
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



export default CarousalPage
import React from "react";
import { Carousel } from "react-bootstrap";
import BMW7 from "../../../images/bmw7.jpg";
import AUDI_A8 from "../../../images/audi-a8.jpg";
import mercedes from "../../../images/mercedez-g-wagon.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid img-height"
          src={BMW7}
          alt="bmw7"
        />
        <Carousel.Caption>
          <h3 className="text-white">
            Buy <strong style={{ color: "#D79F48" }}>BMW7</strong> as your Frist
            car
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid img-height"
          src={AUDI_A8}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-white">
            Buy <strong style={{ color: "#D79F48" }}>Audi A8 </strong>
            as your frist car
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid img-height"
          src={mercedes}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-white">
            Buy <strong style={{ color: "#D79F48" }}>Mercedez G-Wagon </strong>
            as your frist car
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

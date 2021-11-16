/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useHistory } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
const car = ({ detail }) => {
  AOS.init();
  const { name, price, img, description, EngineCapacity, _id } = detail;
  const history = useHistory();
  const purchase = () => {
    history.push(`/purchase/${_id}`);
  };
  return (
    <div className="col my-3">
      <div className="card h-100">
        <img
          height="300"
          src={img}
          className="card-img-top p-2 "
          alt="..."
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-once="false"
          data-aos-easing="linear"
        />
        <div className="card-body">
          <h5
            className="card-title"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-once="false"
            data-aos-easing="linear"
          >
            {name}
          </h5>
          <p
            className="card-text"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-once="false"
            data-aos-easing="linear"
          >
            {description.slice(0, 90)}....
          </p>
          <p
            className="card-text"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-once="false"
            data-aos-easing="linear"
          >
            Engine Capacity: {EngineCapacity}
          </p>
          <p
            className="card-text"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-once="false"
            data-aos-easing="linear"
          >
            Price: {price}
          </p>
        </div>
        <div className="card-footer bg-transparent border-0 ">
          <button
            onClick={purchase}
            className="btn btn-secondary"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-once="false"
            data-aos-easing="linear"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default car;

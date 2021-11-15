/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useHistory } from "react-router";

const car = ({ detail }) => {
  const { name, price, img, description, EngineCapacity, _id } = detail;
  const history = useHistory();
  const purchase = () => {
    history.push(`/purchase/${_id}`);
  };
  return (
    <div className="col my-3">
      <div className="card h-100">
        <img height="300" src={img} className="card-img-top p-2 " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0, 90)}....</p>
          <p className="card-text">Engine Capacity: {EngineCapacity}</p>
          <p className="card-text">Price: {price}</p>
        </div>
        <div className="card-footer bg-transparent border-0 ">
          <button onClick={purchase} className="btn btn-secondary">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default car;

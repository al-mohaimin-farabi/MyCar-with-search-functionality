/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Car from "../Car/Car";
const Cars = (props) => {
  const [cars, setCars] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  let toLoad;
  if (props.toLoad) toLoad = props.toLoad;
  else toLoad = cars.length;
  // console.log(props.searchText);

  useEffect(() => {
    fetch("https://intense-everglades-68946.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setIsLoding(false);
      });
    toLoad = cars.length;
  }, []);
  // console.log(cars);
  // console.log(searchText);

  return (
    <Container>
      <h1 className="mt-3 mb-5 text-secondary">{props.children}</h1>
      {isLoding ? (
        <div className="w-100 text-center mt-0">
          <div
            className="spinner-grow text-secondary text-center"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cars.slice(0, toLoad).map((car) => (
            <Car key={car._id} detail={car}></Car>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Cars;

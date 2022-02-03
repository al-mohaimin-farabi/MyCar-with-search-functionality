/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Car from "../Car/Car";
const Cars = (props) => {
  const [cars, setCars] = useState([]);
  const [isFound, setIsFound] = useState(true);
  const [isLoding, setIsLoding] = useState(true);
  let toLoad;
  let searchText = props.searchText;
  if (props.toLoad) toLoad = props.toLoad;
  else toLoad = cars.length;
  // console.log(props.searchText);

  useEffect(() => {
    fetch("https://intense-everglades-68946.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        if (searchText) {
          if (searchText === "") {
            setCars(data);
            setIsLoding(false);
          } else if (searchText !== "") {
            const matchedCar = data.filter((car) => {
              return car.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setCars(matchedCar);
            if (matchedCar.length < 1) {
              setIsFound(false);
            } else setIsFound(true);
            console.log(matchedCar);
            setIsLoding(false);
          }
        } else setCars(data);
        setIsLoding(false);
      });
    toLoad = cars.length;
  }, [searchText]);
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
      ) : !isFound ? (
        <div className="alert alert-secondary" role="alert">
          Sorry, Can't find anything 😐
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

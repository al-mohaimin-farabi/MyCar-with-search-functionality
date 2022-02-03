import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Car from "../Shared/Car/Car";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const SearchResult = () => {
  const { searchedText } = useParams();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://intense-everglades-68946.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        const matchedCar = data.filter((car) => {
          return car.name.toLowerCase().includes(searchedText.toLowerCase());
        });
        setCars(matchedCar);
      });
  }, [searchedText]);
  return (
    <>
      <Navigation></Navigation>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cars.map((car) => (
            <Car key={car._id} detail={car}></Car>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SearchResult;

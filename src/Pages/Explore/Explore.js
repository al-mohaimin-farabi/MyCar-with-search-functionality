import React from "react";
import Cars from "../Shared/Cars/Cars";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import Searchbox from "./Searchbox";
const Explore = () => {
  return (
    <>
      <Navigation></Navigation>
      <Searchbox></Searchbox>
      <Cars>Cars Available</Cars>
      <Footer></Footer>
    </>
  );
};

export default Explore;

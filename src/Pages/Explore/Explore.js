import React from "react";
import Cars from "../Shared/Cars/Cars";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import Searchbox from "./Searchbox";
const Explore = () => {
  const getSearchedText = (e) => {
    e.preventDefault();
    setSearchText(e.target.searchtext.value);
    // console.log(e.target.searchtext.value);
  };
  const [searchText, setSearchText] = useState();
  return (
    <>
      <Navigation></Navigation>
      <Searchbox getSearchedText={getSearchedText}></Searchbox>
      <Cars searchText={searchText}>Cars Available</Cars>
      <Footer></Footer>
    </>
  );
};

export default Explore;

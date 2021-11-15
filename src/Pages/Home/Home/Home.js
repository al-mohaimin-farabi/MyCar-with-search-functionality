import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Cars from "../../Shared/Cars/Cars";
import Review from "../Review/Review";
import WhyUs from "../WhyUs/WhyUs";
const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Cars toLoad={6}>Best cars to buy now</Cars>
      <WhyUs></WhyUs>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;

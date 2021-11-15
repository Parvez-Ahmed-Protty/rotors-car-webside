import React from "react";
import Reviews from "../Reviews/Reviews";
import Banner from "./Banner/Banner";
import CarGallery from "./CarGallery/CarGallery";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Reviews />
      <CarGallery></CarGallery>
    </div>
  );
};

export default Home;

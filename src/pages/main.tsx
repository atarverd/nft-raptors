import React from "react";
import Cart from "../components/cart/cart";
import TopCollections from "../components/mainPage/topCollections";
import Categories from "../components/mainPage/categories";
import Carusel from "../components/mainPage/carusel";

const Main = () => {
  return (
    <>
      <Carusel />
      <TopCollections />
      <Categories />
    </>
  );
};

export default Main;

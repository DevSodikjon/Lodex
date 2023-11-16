import React from "react";
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import Brands from "../sections/Brands";
import Designer from "../sections/Designer";
import Reason from "../sections/Reason";
import Blog from "../sections/Blog";
import HeroWomen from "../sections/HeroWomen";

const Women = () => {
  const dataText = "";

  return (
    <div>
      {/* <Hero /> */}
      <HeroWomen />
      <Products />
      <Brands />
      <Designer />
      <Reason />
      <Blog />
    </div>
  );
};

export default Women;

import React from "react";
import HeroChild from "../sections/HeroChild";
import Products from "../sections/Products";
import Brands from "../sections/Brands";
import Designer from "../sections/Designer";
import Reason from "../sections/Reason";
import Blog from "../sections/Blog";
import HeroWomen from "../sections/HeroWomen";

const Childeren = () => {
  return (
    <div>
      <HeroChild />
      <Products />
      <Brands />
      <Designer />
      <Reason />
      <Blog />
    </div>
  );
};

export default Childeren;

import React from "react";
import Nabvar from "./Nabvar";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";

const Body = () => {
  return (
    <div>
      <Nabvar />
      <div className="container">
        <BurgerBuilder />
      </div>
    </div>
  );
};

export default Body;

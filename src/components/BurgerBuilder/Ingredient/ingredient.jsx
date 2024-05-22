import React from "react";
import './ingredient.css';
import BreadTop from "../../../Assets/images/top.png";
import Meat from "../../../Assets/images/meat.png";
import Cheese from "../../../Assets/images/cheese.png";
import Salad from "../../../Assets/images/salad.png";
import BreadBottom from "../../../Assets/images/bottom.png";

export const ingredient = (props) => {
      let ingredients= null;

      switch(props.type){

        case 'bread-bottom':
            ingredients= <div><img src={BreadBottom} alt="Bread Bottom" /></div>
        break;
        case 'bread-top':
            ingredients= <div><img src={BreadTop} alt="Bread Top" /></div>
        break;
        case 'meat':
            ingredients= <div><img src={Meat} alt="Meat" /></div>

        break;
        case 'cheese':
            ingredients= <div><img src={Cheese} alt="Cheese" /></div>

        break;
        case 'salad':
            ingredients= <div><img src={Salad} alt="Salad" /></div>

        break;
       
        default:
            ingredients=null;
      }

  return (
    <div className="ingredient">
        {ingredients}
    </div>
  );
};
export default ingredient;
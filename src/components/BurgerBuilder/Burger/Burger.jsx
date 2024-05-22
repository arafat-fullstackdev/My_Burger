import React from 'react';
import  Ingredient  from '../Ingredient/ingredient';


const Burger = props => {
  return (
    <div>
        <Ingredient type="bread-top"/>
        <Ingredient type="meat"/>
        <Ingredient type="meat"/>
        <Ingredient type="bread-bottom"/>
    </div>
  )
}

export default Burger;
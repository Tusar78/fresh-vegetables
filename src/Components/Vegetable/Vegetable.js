import React from "react";
import { FiShoppingCart } from 'react-icons/fi'
import "./Vegetable.css";

const Vegetable = ({ vegetable, addToCart }) => {
  const { img, name, weight, price } = vegetable;
  return (
    <div className="vegetable">
      <img src={img} alt={name} className="vegetable__img" />

      <div className="vegetable__info">
        <h4 className="vegetable__name">{name}</h4>
        <span className="vegetable__need">{weight}</span>
        <p className="vegetable__price">Price: ৳{price}</p>
      </div>

      <button type="button" className="vegetable__btn btn--green" onClick={() => addToCart(vegetable)}>
        <span>Add To Cart</span>
        <FiShoppingCart className="vegetable__btn-icon" /> 
      </button>
    </div>
  );
};

export default Vegetable;

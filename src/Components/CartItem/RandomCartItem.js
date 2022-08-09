import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import "./CartItem.css";

const RandomCartItem = ({ choose, randomDeleteProduct }) => {
  const { img, name, price } = choose;
  return (
    <div className="cart__item">
      <div className="cart__item-info">
        <img
          src={img}
          alt={name}
          className="cart__item-img"
        />
        <div>
          <h3 className="cart__item-name">{name}</h3>
          <span className="cart__item-subname">৳{price}</span>
        </div>
      </div>
      <button type="button" className="cart__item-btn" onClick={() => randomDeleteProduct(choose)}>
        <AiTwotoneDelete className="cart__item-icon" />
      </button>
    </div>
  );
};

export default RandomCartItem;

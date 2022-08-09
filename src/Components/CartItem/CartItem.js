import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import "./CartItem.css";

const CartItem = ({ vegetable, deleteProduct }) => {
  const { img, name, price } = vegetable;
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
      <button type="button" className="cart__item-btn" onClick={() => deleteProduct(vegetable)}>
        <AiTwotoneDelete className="cart__item-icon" />
      </button>
    </div>
  );
};

export default CartItem;

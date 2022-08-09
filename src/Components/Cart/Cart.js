import React from "react";
import { BiSelectMultiple, BiLoaderCircle } from "react-icons/bi";
import CartItem from "../CartItem/CartItem";
import RandomCartItem from "../CartItem/RandomCartItem";
import "./Cart.css";

const Cart = ({ toggle, vegetables, chooseAgain, choose, chooseOne, deleteProduct, randomDeleteProduct }) => {
  return (
    <section
      className={toggle ? "cart-container" : "cart-container hide-container"}
    >
      <div className="cart__info">
        <h2 className="cart__title">{(vegetables.length !== 0 || choose.length !== 0) ? 'Selected Product' : 'You have not selected any product.'}</h2>
        <div className="cart__item-container">
          {vegetables.map((vegetable) => (
            <CartItem key={Math.random()} vegetable={vegetable} deleteProduct={deleteProduct} />
          ))}
        </div>
        <div className="cart__buttons">
          <button
            type="button"
            className={vegetables.length > 1 ? 'cart__btn btn--green' : 'btn--hide'}
            onClick={chooseOne}
            onChange={chooseOne}
          >
            <span>Choose One</span>
            <BiSelectMultiple />
          </button>
          <button type="button" className={vegetables.length !== 0 ? 'cart__btn btn--danger' : 'btn--hide'} onClick={chooseAgain}>
            <span>Choose Again</span>
            <BiLoaderCircle />
          </button>
        </div>
        <div className="cart__random-choose">
          {
            choose.length !== 0 ? <RandomCartItem choose={choose} randomDeleteProduct={randomDeleteProduct}/> : null
            // choose.map(choice => <CartItem vegetable={choice} deleteProduct={deleteProduct} /> )
          }          
        </div>
      </div>
    </section>
  );
};

export default Cart;

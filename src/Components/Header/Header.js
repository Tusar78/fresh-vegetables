import React, { useState } from "react";
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import "./Header.css";

const Header = ({ toggleCartFunc, vegetables }) => {
  const [query, setQuery] = useState("");
  const [toggleCart, setToggleCart] = useState(true);

  const toggle = () => {
    setToggleCart(!toggleCart);
    toggleCartFunc(toggleCart);
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="header">
      <div className="navbar">
        <nav className="nav bd-grid">
          <a href="#home" className="nav__logo">
            <img src="logo.png" alt="Fresh vegetable logo" />
          </a>
          <div className="nav__search">
            <input
              type="text"
              value={query}
              onChange={handleQuery}
              className="nav__search-text"
              placeholder="Search vegetables"
            />
            <button type="button" className="nav__search-btn btn--green">
              Search
            </button>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <FiHeart className="nav__icon" />
              </li>
              <li className="nav__item">
                <div className="added__item" onClick={toggle}>
                  <FiShoppingBag className="nav__icon" />
                  <span className="added__item-number">{vegetables.length}</span>
                </div>
              </li>
              <li className="nav__item">
                <FiUser className="nav__icon" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

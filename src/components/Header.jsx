import React, { Component } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    auth.signOut();
  };
  return (
    <nav className="header">
      {/*Logo - img */}
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      {/* Search box */}
      <div className="header-search">
        <input type="text" className="header-search-input" />
        <SearchIcon className="header-search-icon" />
      </div>

      {/* Links */}
      <div className="header-nav">
        {/* Login link */}
        <Link to={!user && "/login"} className="header-link">
          <div onClick={login} className="header-nav-option">
            <span className="header-option-l1">Hello, </span>
            <span className="header-option-l2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
          {/* Orders link */}
        </Link>
        <Link to="/" className="header-link">
          <div className="header-nav-option">
            <span className="header-option-l1">Returns</span>
            <span className="header-option-l2">& Orders</span>
          </div>
        </Link>
        {/* Prime link */}
        <Link to="/" className="header-link">
          <div className="header-nav-option">
            <span className="header-option-l1">Your</span>
            <span className="header-option-l2">Prime</span>
          </div>
        </Link>
        {/* Basket/checkout link */}
        <Link to={user ? "/checkout" : "/login"} className="header-link">
          <div className="header-nav-basket">
            <ShoppingBasketIcon />
            <span className="header-option-l2 header-nav-basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* Basket icon with number */}
    </nav>
  );
}

export default Header;

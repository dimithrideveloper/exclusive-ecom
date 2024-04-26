import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

export default function MainNavigation() {
  return (
    <div className="main_navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src="/assets/exclusive-logo.png" alt="exclusive logo" />
        </Link>
      </div>
      <nav className="navbar_nav">
        <ul>
          <li>
            <Link className="navbar_link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar_link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="navbar_link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar_link" to="/sign-up">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>

      <div className="navbar_search">
        <input className="search" type="text" placeholder="Search" />
      </div>

      <div className="navbar_icons">
        <Link to="/wishlist">
          <img className="navbar_icon" src="/assets/wishlist-icon.svg" alt="" />
        </Link>
        <Link to="cart">
          <img className="navbar_icon" src="/assets/cart-icon.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}

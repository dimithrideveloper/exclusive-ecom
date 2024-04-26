import React from "react";
import { Link } from "react-router-dom";
import "./SecondNavigation.css";

export default function SecondNavigation() {
  return (
    <nav className="second_navbar_nav">
      <ul>
        <li>
          <Link className="second_navbar_link" to="/womans-fashion">
            Woman's Fashion
          </Link>
        </li>
        <li>
          <Link className="second_navbar_link" to="/mens-fashion">
            Men's Fashion
          </Link>
        </li>
        <li>
          <Link className="second_navbar_link" to="/electronics">
            Electronics
          </Link>
        </li>
        <li>
          <Link className="second_navbar_link" to="/home-&-lifestyle">
            Home & Lifestyle
          </Link>
        </li>
        <li>
          <Link className="second_navbar_link" to="/machine">
            Machine
          </Link>
        </li>
        <li>
          <Link className="second_navbar_link" to="/sports-&-outdoor">
            Sports & Outdoor
          </Link>
        </li>
        <li>
          <Link className="second_navbar_link" to="/babys-toys">
            Baby's Toys
          </Link>
        </li>
        <li>
          <Link className="second_navbar_link" to="/groceries-&-pets">
            Groceries & Pets
          </Link>
        </li>
        <li>
          <Link className="second_navbar_link" to="/health-&-beauty">
            Health & Beauty
          </Link>
        </li>
      </ul>
    </nav>
  );
}

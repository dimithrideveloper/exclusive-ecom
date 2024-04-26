import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_column">
        <h1 className="brand_name">Exclusive</h1>
        <h3 className="footer_title">Subscribe</h3>
        <p className="footer_text">Get 10% off your first order</p>
        <div className="footer_newsletter">
          <input
            className="footer_input"
            type="email"
            placeholder="Enter your email"
          />
          {/* <img
            type="button"
            className="footer_input_button"
            src="/assets/send-icon.svg"
            alt="send arrow icon"
          /> */}
        </div>
      </div>
      <div className="footer_column">
        <h3 className="footer_title">Support</h3>
        <p className="footer_text">Colombo, Sri Lanka</p>
        <p className="footer_text">contact@exlcusive.com</p>
        <p className="footer_text">+94 76 324 54346</p>
      </div>
      <div className="footer_column">
        <h3 className="footer_title">Account</h3>
        <p className="footer_text">My Account</p>
        <p className="footer_text">Login / Register</p>
        <p className="footer_text">Cart</p>
        <p className="footer_text">Wishlist</p>
        <p className="footer_text">Shop</p>
      </div>
      <div className="footer_column">
        <h3 className="footer_title">Quick Link</h3>
        <p className="footer_text">Privacy Policy</p>
        <p className="footer_text">Terms Of Use</p>
        <p className="footer_text">FAQ</p>
        <p className="footer_text">Contact</p>
      </div>
      <div className="footer_column">
        {" "}
        <h3 className="footer_title">Download App</h3>
        <p className="footer_text_variant">Save $3 with App New User Only</p>
        <div className="footer_downloads_container">
          <img
            className="footer_qr.svg"
            src="/assets/qr-code.svg"
            alt="qr-code"
          />
          <div className="footer_mobile_downloads">
            <img
              className="playstore_icon"
              src="/assets/playstore.svg"
              alt="playstore"
            />
            <img
              className="appstore_icon"
              src="/assets/appstore.svg"
              alt="appstore"
            />
          </div>
        </div>
        <div className="footer_socials">
          <img
            src="/assets/facebook-icon.svg"
            alt=""
            className="socials_icon"
          />
          <img
            src="/assets/instagram-icon.svg"
            alt=""
            className="socials_icon"
          />
          <img src="/assets/x-icon.svg" alt="" className="socials_icon" />
          <img
            src="/assets/linkedin-icon.svg"
            alt=""
            className="socials_icon"
          />
        </div>
      </div>
    </div>
  );
}

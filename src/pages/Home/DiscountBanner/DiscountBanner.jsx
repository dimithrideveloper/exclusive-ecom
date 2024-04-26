import React from "react";
import "./DiscountBanner.css";

export default function DiscountBanner() {
  return (
    <div className="layout">
      <div className="discount_banner_container">
        <div className="discount_banner">
          <div className="discount_banner_col">
            <h2 className="discount_banner_category">Accessories</h2>
            <h3 className="discount_banner_title">
              Enhance your music experience
            </h3>
            <div className="discount_banner_countdown">
              <div className="countdown_text">
                <p className="countdown_time">23</p>
                <p className="countdown_time_placeholder">Hour</p>
              </div>
              <div className="countdown_text">
                <p className="countdown_time">05</p>
                <p className="countdown_time_placeholder">Days</p>
              </div>
              <div className="countdown_text">
                <p className="countdown_time">59</p>
                <p className="countdown_time_placeholder">Minutes</p>
              </div>
              <div className="countdown_text">
                <p className="countdown_time">35</p>
                <p className="countdown_time_placeholder">seconds</p>
              </div>
            </div>
            <button className="buy_now">Buy Now</button>
          </div>
          <div className="discount_banner_col">
            <img
              className="discount_banner_img"
              src="/assets/discount-banner.png"
              alt="discounted-item"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

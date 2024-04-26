import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product_card" key={product.id}>
      <div className="product_card_header">
        <div className="product_card_offer">
          <p className="product_card_offer_amount">{product.offerAmount}</p>
        </div>
        <div className="product_card_action">
          <img
            className="product_save"
            src="/assets/wishlist-icon.svg"
            alt=""
          />
        </div>
        <img
          className="product_card_img"
          src={product.imageUrl}
          alt={product.name}
        />
        <button className="add_cart">Add to cart</button>
      </div>
      <div className="product_card_body">
        <p className="product_card_title">{product.name}</p>
        <div className="product_card_prices">
          <p className="product_card_sale">{product.salePrice}</p>
          <p className="product_card_price">{product.actualPrice}</p>
        </div>
        <p className="product_card_rating">{product.rating}</p>
      </div>
    </div>
  );
}

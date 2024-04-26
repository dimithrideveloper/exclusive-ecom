import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./BestSelling.css";

const products = [
  {
    id: 1,
    name: "AK-900 Wired Keyboard",
    actualPrice: "$1160",
    salePrice: "$960",
    imageUrl: "/assets/product1.png",
    rating: "⭐⭐⭐⭐⭐",
    offerAmount: "-40%",
  },
  {
    id: 2,
    name: "IPS LCD Gaming Monitor",
    actualPrice: "$400",
    salePrice: "$370",
    imageUrl: "/assets/product2.png",
    rating: "⭐⭐⭐⭐⭐",
    offerAmount: "-20%",
  },
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    actualPrice: "$160",
    salePrice: "$120",
    imageUrl: "/assets/product3.png",
    rating: "⭐⭐⭐⭐⭐",
    offerAmount: "-25%",
  },
];

export default function BestSelling() {
  return (
    <div className="layout">
      <div className="section_title">
        <div className="section_style"></div>
        <h2 className="section_heading">This Month</h2>
      </div>
      <div className="bestselling">
        <h3 className="bestselling_heading">Best Selling Products</h3>
        <button className="primary-cta">View All</button>
      </div>
      <div className="bestselling_listings_container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

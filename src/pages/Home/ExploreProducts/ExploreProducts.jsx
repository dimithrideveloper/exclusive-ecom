import React from "react";

import "./ExploreProducts.css";
import ProductCard from "../../../components/ProductCard/ProductCard";

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
  {
    id: 4,
    name: "S-Series Comfort Chair ",
    actualPrice: "$400",
    salePrice: "$375",
    imageUrl: "/assets/product4.png",
    rating: "⭐⭐⭐⭐⭐",
    offerAmount: "-10%",
  },
  {
    id: 5,
    name: "Gucci duffle bag",
    actualPrice: "$2000",
    salePrice: "$1700",
    imageUrl: "/assets/product5.png",
    rating: "⭐⭐⭐⭐⭐",
    offerAmount: "-15%",
  },

  {
    id: 6,
    name: "Small BookSelf",
    actualPrice: "$360",
    salePrice: "$250",
    imageUrl: "/assets/product6.png",
    rating: "⭐⭐⭐⭐⭐",
    offerAmount: "-25%",
  },
];

export default function ExploreProducts() {
  return (
    <div className="explore_products_layout">
      <div className="section_title">
        <div className="section_style"></div>
        <h2 className="section_heading">Our Products</h2>
      </div>
      <div className="bestselling">
        <h3 className="bestselling_heading">Explore Our Products</h3>
        <button className="primary-cta">View All</button>
      </div>
      <div className="explore_products_container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

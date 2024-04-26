import React, { useState, useRef, useLayoutEffect } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./Sales.css";

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

export default function Sales() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const productListRef = useRef(null);

  useLayoutEffect(() => {
    const container = productListRef.current;
    if (container) {
      setScrollPosition(container.scrollWidth - container.clientWidth);
    }
  }, [productListRef]);

  const handleScrollLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollLeft -= 200;
      setScrollPosition(scrollPosition - 200);
    }
  };

  const handleScrollRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollLeft += 200;
      setScrollPosition(scrollPosition + 200);
    }
  };

  return (
    <div className="layout">
      <div className="section_title">
        <div className="section_style"></div>
        <h2 className="section_heading">Today's</h2>
      </div>
      <div className="promo">
        <h3 className="promo_heading">Flash Sales</h3>
        <div className="arrow_controllers">
          <img
            onClick={handleScrollLeft}
            disabled={scrollPosition === 0}
            className="left_arrow"
            src="/assets/arrow-icon.svg"
            alt="arrow-icon"
          />
          <img
            onClick={handleScrollRight}
            className="right_arrow"
            disabled={
              scrollPosition ===
              productListRef.current?.scrollWidth -
                productListRef.current?.clientWidth
            }
            src="/assets/arrow-icon.svg"
            alt="arrow-icon"
          />
        </div>
      </div>
      <div className="product_listings_container" ref={productListRef}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="section_button_holder">
        <button className="primary-cta">View All Products</button>
      </div>
    </div>
  );
}

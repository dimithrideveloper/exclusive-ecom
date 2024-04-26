import React, { useState, useRef, useLayoutEffect } from "react";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Phones",
    imageUrl: "/assets/category-cellphone.svg",
  },
  {
    id: 2,
    name: "Computers",
    imageUrl: "/assets/category-computer.svg",
  },
  {
    id: 1,
    name: "Smart Watch",
    imageUrl: "/assets/category-smartwatch.svg",
  },
  {
    id: 1,
    name: "Camera",
    imageUrl: "/assets/category-camera.svg",
  },
  {
    id: 1,
    name: "Head Phones",
    imageUrl: "/assets/category-headphone.svg",
  },
  {
    id: 1,
    name: "Gaming",
    imageUrl: "/assets/category-gamepad.svg",
  },
];

export default function Categories() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const categoryListRef = useRef(null);

  useLayoutEffect(() => {
    const container = categoryListRef.current;
    if (container) {
      setScrollPosition(container.scrollWidth - container.clientWidth);
    }
  }, [categoryListRef]);

  const handleScrollLeft = () => {
    if (categoryListRef.current) {
      categoryListRef.current.scrollLeft -= 200;
      setScrollPosition(scrollPosition - 200);
    }
  };

  const handleScrollRight = () => {
    if (categoryListRef.current) {
      categoryListRef.current.scrollLeft += 200;
      setScrollPosition(scrollPosition + 200);
    }
  };
  return (
    <div className="layout">
      <div className="section_title">
        <div className="section_style"></div>
        <h2 className="section_heading">Categories</h2>
      </div>
      <div className="promo">
        <h3 className="promo_heading">Browse By Categories</h3>
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
              categoryListRef.current?.scrollWidth -
                categoryListRef.current?.clientWidth
            }
            src="/assets/arrow-icon.svg"
            alt="arrow-icon"
          />
        </div>
      </div>
      <div className="categories_container" ref={categoryListRef}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

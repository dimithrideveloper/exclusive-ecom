import React from "react";
import "./CategoryCard.css";

export default function CategoryCard({ category }) {
  return (
    <div className="category_card">
      <div className="category_card_content">
        <img
          className="category_img"
          src={category.imageUrl}
          alt="category-icon"
        />
        <p className="category_name">{category.name}</p>
      </div>
    </div>
  );
}

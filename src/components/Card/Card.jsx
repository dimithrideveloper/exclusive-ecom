import React from "react";
import "./Card.css";

export default function Card({ card }) {
  return (
    <div className="benefit_card" key={card.id}>
      <img src={card.imgUrl} alt="" />
      <h3 className="benefit_card_title">{card.title}</h3>
      <p className="benefit_card_text">{card.text}</p>
    </div>
  );
}

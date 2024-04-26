import React from "react";
// Component Imports
import Card from "../../../components/Card/Card";
// Style Imports
import "./Benefits.css";

const benefits = [
  {
    id: 1,
    imgUrl: "/assets/fast-delivery.svg",
    title: "Free And Fast Delivery",
    text: " Free delivery for all orders over $140",
  },
  {
    id: 2,
    imgUrl: "/assets/customer-support.svg",
    title: "24/7 CUSTOMER SERVICE",
    text: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    imgUrl: "/assets/money-back.svg",
    title: "Money Back Guarentee",
    text: "We return money within 30 days",
  },
];

export default function Benefits() {
  return (
    <div className="layout">
      <div className="benefits_container">
        {benefits.map((benefit) => (
          <Card key={benefit.id} card={benefit} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
// Component Imports
import Card from "../../../components/Card/Card";
import EmployeeCard from "../../../components/EmployeeCard/EmployeeCard";
import "./OurStory.css";

const infos = [
  {
    id: 1,
    imgUrl: "/assets/marketplace-icon.svg",
    title: "10.5k",
    text: "Sellers active on our site",
  },
  {
    id: 2,
    imgUrl: "/assets/sale-icon.svg",
    title: "33k",
    text: "Monthly product sale",
  },
  {
    id: 3,
    imgUrl: "/assets/customer-icon.svg",
    title: "45.5k",
    text: "Customers active on our site",
  },
  {
    id: 4,
    imgUrl: "/assets/money-icon.svg",
    title: "25k",
    text: "Annual gross sale on our site",
  },
];
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

const employees = [
  {
    id: 1,
    imgUrl: "/assets/employee-1.png",
    name: "Tom Cruise",
    designation: "Founder, Chairman",
    x: "/assets/x-icon.svg",
    instagram: "/assets/instagram-icon.svg",
    facebook: "/assets/facebook-icon.svg",
  },
  {
    id: 2,
    imgUrl: "/assets/employee-2.png",
    name: "Emma Watson",
    designation: "Managing Director",
    x: "/assets/x-icon.svg",
    instagram: "/assets/instagram-icon.svg",
    facebook: "/assets/facebook-icon.svg",
  },
  {
    id: 3,
    imgUrl: "/assets/employee-3.png",
    name: "Will Smith",
    designation: "Product Designer",
    x: "/assets/x-icon.svg",
    instagram: "/assets/instagram-icon.svg",
    facebook: "/assets/facebook-icon.svg",
  },
];
export default function OurStory() {
  return (
    <div className="layout">
      <div className="story_container">
        <div className="story_text">
          <h2 className="story_heading">Our story</h2>
          <p className="story_paragraph">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. Exclusive has more than 1 Million products to
            offer, growing at a very fast. <br></br>
            <br></br>Exclusive offers a diverse assotment in categories ranging
            from consumer.
          </p>
        </div>
        <img className="story_img" src="/assets/about-us.png" alt="" />
      </div>
      <div className="infos_container">
        {infos.map((info) => (
          <Card className="info_card" key={info.id} card={info} />
        ))}
      </div>
      <div className="carousel_container">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
      <div className="benefits_container">
        {benefits.map((benefit) => (
          <Card key={benefit.id} card={benefit} />
        ))}
      </div>
    </div>
  );
}

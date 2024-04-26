import React from "react";
import SecondNavigation from "../../../components/Navigation/SecondNavigation/SecondNavigation";
import Carosel from "../../../components/Carosel/Carosel";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero_layout">
      <SecondNavigation />
      <Carosel />
    </div>
  );
}

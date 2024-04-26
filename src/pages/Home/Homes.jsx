import React from "react";

// Component Imports
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";
import AnnouncementBar from "../../components/Banners/AnnouncementBar";
import Hero from "./Hero/Hero";
import Sales from "./Sales/Sales";
import Categories from "./Categories/Categories";
import BestSelling from "./BestSelling/BestSelling";
import DiscountBanner from "./DiscountBanner/DiscountBanner";
import ExploreProducts from "./ExploreProducts/ExploreProducts";
import Benefits from "./Benefits/Benefits";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <MainNavigation />
      <Hero />
      <Sales />
      <Categories />
      <BestSelling />
      <DiscountBanner />
      <ExploreProducts />
      <Benefits />
      <Footer />
    </>
  );
}

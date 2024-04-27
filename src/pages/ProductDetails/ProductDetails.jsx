import React from "react";
// Component Imports
import AnnouncementBar from "../../components/Banners/AnnouncementBar";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Product from "./Product/Product";
import Footer from "../../components/Footer/Footer";

export default function ProductDetails() {
  return (
    <>
      <AnnouncementBar />
      <MainNavigation />
      <Breadcrumbs breadcrumb={{ prev: "Home", current: "Product Details" }} />
      <Product />
      <Footer />
    </>
  );
}

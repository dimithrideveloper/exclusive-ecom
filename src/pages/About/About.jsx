import React from "react";
// Component Imports
import AnnouncementBar from "../../components/Banners/AnnouncementBar";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import OurStory from "./OurStory/OurStory";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <>
      <AnnouncementBar />
      <MainNavigation />
      <Breadcrumbs breadcrumb={{ prev: "Home", current: "About" }} />
      <OurStory />
      <Footer />
    </>
  );
}

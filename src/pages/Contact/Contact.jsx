import React from "react";
// Component Imports
import AnnouncementBar from "../../components/Banners/AnnouncementBar";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ContactDetails from "./ContactDetails/ContactDetails";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <AnnouncementBar />
      <MainNavigation />
      <Breadcrumbs breadcrumb={{ prev: "Home", current: "Contact" }} />
      <ContactDetails />
      <Footer />
    </>
  );
}

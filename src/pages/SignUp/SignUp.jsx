import React from "react";
// Component Imports
import AnnouncementBar from "../../components/Banners/AnnouncementBar";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";
import SignUpForm from "./SignUpForm/SignUpForm";
import Footer from "../../components/Footer/Footer";

export default function SignUp() {
  return (
    <>
      <AnnouncementBar />
      <MainNavigation />
      <SignUpForm />
      <Footer />
    </>
  );
}

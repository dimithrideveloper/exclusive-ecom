// Component imports
import AnnouncementBar from "../../components/Banners/AnnouncementBar";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";
import BillingForm from "./BillingForm/BillingForm";
import Footer from "../../components/Footer/Footer";

// Style imports
import "./Checkout.css";

export default function Checkout() {
  return (
    <>
      <AnnouncementBar />
      <MainNavigation />
      <BillingForm />
      <Footer />
    </>
  );
}

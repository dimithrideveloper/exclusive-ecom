// Component imports
import AnnouncementBar from "../../components/Banners/AnnouncementBar";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";
import LoginForm from "./LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";

export default function Login() {
  return (
    <>
      <AnnouncementBar />
      <MainNavigation />
      <LoginForm />
      <Footer />
    </>
  );
}

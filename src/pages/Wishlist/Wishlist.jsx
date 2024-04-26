// Component imports
import AnnouncementBar from "../../components/Banners/AnnouncementBar";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";
import WishlistItems from "./WishlistItems/WishlistItems";
import RecommendedItems from "./RecommendedItems/RecommendedItems";
import Footer from "../../components/Footer/Footer";

export default function Wishlist() {
  return (
    <>
      <AnnouncementBar />
      <MainNavigation />
      <WishlistItems />
      <RecommendedItems />
      <Footer />
    </>
  );
}

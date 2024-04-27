import { BrowserRouter, Route, Routes } from "react-router-dom";
// Style imports
import "./App.css";
// Page imports
import Home from "./pages/Home/Homes";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Wishlist from "./pages/Wishlist/Wishlist";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

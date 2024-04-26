// Component Imports
import ProductCard from "../../../components/ProductCard/ProductCard";
// Style imports
import "./WishlistItems.css";

const products = [
  {
    id: 1,
    name: "AK-900 Wired Keyboard",
    actualPrice: "$1160",
    salePrice: "$960",
    imageUrl: "/assets/product1.png",
    rating: "⭐⭐⭐⭐⭐",
    offerAmount: "-40%",
  },
  {
    id: 2,
    name: "IPS LCD Gaming Monitor",
    actualPrice: "$400",
    salePrice: "$370",
    imageUrl: "/assets/product2.png",
    rating: "⭐⭐⭐⭐⭐",
    offerAmount: "-20%",
  },
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    actualPrice: "$160",
    salePrice: "$120",
    imageUrl: "/assets/product3.png",
    rating: "⭐⭐⭐⭐⭐",
    offerAmount: "-25%",
  },
];

export default function WishlistItems() {
  return (
    <div className="layout">
      <div className="wishlist_items_container">
        <div className="wishlist_items_heading">
          <h3 className="wishlist_items_title">Wishlist ({products.length})</h3>
          <button className="outlined_cta">Move all to bag</button>
        </div>

        <div className="wishlist_items">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

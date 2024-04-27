// Component imports
import ProductCard from "../../../components/ProductCard/ProductCard";

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

export default function RelatedProducts() {
  return (
    <div className="layout">
      <div className="section_title">
        <div className="section_style"></div>
        <h2 className="section_heading">Related Items</h2>
      </div>
      <div className="product_listings_container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Style imports
import "./Product.css";

export default function Product() {
  return (
    <div className="layout">
      <div className="product_container">
        <div className="product_preview_imgs">
          <img
            src="/assets/product-img-1.png"
            alt="product img"
            className="product_preview_img"
          />

          <img
            src="/assets/product-img-2.png"
            alt="product img"
            className="product_preview_img"
          />
          <img
            src="/assets/product-img-3.png"
            alt="product img"
            className="product_preview_img"
          />
          <img
            src="/assets/product-img-4.png"
            alt="product img"
            className="product_preview_img"
          />
        </div>
        <div className="product_main_img">
          <img
            src="/assets/product-img-3.png"
            alt="product-img"
            className="main_img"
          />
        </div>
        <div className="product_description">
          <h3 className="product_title">Havic HV G-92 Gamepad</h3>
          <div className="rating">
            <p className="product_rating_stars">⭐⭐⭐⭐</p>
            <p className="product_rating">(150) Reviews</p>
            <p className="vertical_divider">|</p>
            <p className="product_stock">In Stock</p>
          </div>
          <p className="product_price">$150.45</p>
          <p className="product_info">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr />
          <div className="product_colors">
            <label htmlFor="product_color" className="product_colors_label">
              Colors:
            </label>
            <div type="radio" className="product_color" />
            <div type="radio" className="product_color" />
          </div>
          <div className="product_sizes">
            <label htmlFor="product_size">Sizes:</label>
            <div className="product_size">XS</div>
            <div className="product_size">S</div>
            <div className="product_size">M</div>
            <div className="product_size">L</div>
            <div className="product_size">XL</div>
          </div>
          <div className="product_buttons">
            <div className="product_qty">
              <p className="subtract_qty">-</p>
              <p className="qty_count">5</p>
              <p className="add_qty">+</p>
            </div>
            <button className="primary-cta">Buy Now</button>
            <img
              src="/assets/wishlist-icon.svg"
              alt="wishlist-icon"
              className="product_save_icon"
            />
          </div>
          <div className="product_delivery_info">
            <div className="product_shipping">
              <div className="product_shipping_icon">
                <img
                  src="/assets/delivery-icon.svg"
                  alt=""
                  className="shipping_icon"
                />
              </div>
              <div className="product_shipping_text">
                <h3 className="product_shipping_title">Free Delivery</h3>
                <p className="product_shipping_paragraph">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="product_shipping">
              <div className="product_shipping_icon">
                <img
                  src="/assets/return-icon.svg"
                  alt=""
                  className="shipping_icon"
                />
              </div>
              <div className="product_shipping_text">
                <h3 className="product_shipping_title">Return Delivery</h3>
                <p className="product_shipping_paragraph">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

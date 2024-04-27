// Style imports
import "./BillingForm.css";

export default function BillingForm() {
  return (
    <div className="layout">
      <div className="billing_container">
        <div className="billing_form">
          <h2 className="page_heading">Billing Details</h2>
          <form action="#">
            <label className="billing_label">
              First Name
              <input
                className="billing_input"
                type="text"
                required
                name="first-name"
              />
            </label>
            <label className="billing_label">
              Company Name
              <input
                className="billing_input"
                type="text"
                name="company-name"
              />
            </label>
            <label className="billing_label">
              Street Address
              <input
                className="billing_input"
                type="text"
                required
                name="street-address"
              />
            </label>
            <label className="billing_label">
              Apartment, floor & etc.(Optional)
              <input className="billing_input" type="text" name="apartment" />
            </label>
            <label className="billing_label">
              City
              <input
                className="billing_input"
                type="text"
                required
                name="city"
              />
            </label>
            <label className="billing_label">
              Phone Number
              <input
                className="billing_input"
                type="tel"
                required
                name="telephone"
              />
            </label>
            <label className="billing_label">
              Email Address
              <input
                className="billing_input"
                type="email"
                required
                name="email"
              />
            </label>
          </form>
          <div className="billing_save_detials">
            <label className="billing_checkbox_label">
              <input className="billing_checkbox" type="checkbox" />
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
        <div className="order_summary">
          <div className="order_item">
            <div className="order_item_info">
              <img
                className="order_item_img"
                src="/assets/product2.png"
                alt=""
              />
              <h3 className="order_item_name">LCD Monitor</h3>
            </div>
            <div className="order_item_prices">
              <p className="order_item_price">$195</p>
            </div>
          </div>
          <div className="order_item">
            <div className="order_item_info">
              <img
                className="order_item_img"
                src="/assets/product2.png"
                alt=""
              />
              <h3 className="order_item_name">LCD Monitor</h3>
            </div>
            <div className="order_item_prices">
              <p className="order_item_price">$195</p>
            </div>
          </div>
          <div className="order_item">
            <p className="order_price_text">Subtotal:</p>
            <p className="order_item_price">$418</p>
          </div>
          <hr />
          <div className="order_item">
            <p className="order_price_text">Shipping:</p>
            <p className="order_item_price">FREE</p>
          </div>
          <hr />
          <div className="order_item">
            <p className="order_price_text">Total:</p>
            <p className="order_item_price">$418</p>
          </div>
          <div className="order_item">
            <div className="order_item_info">
              <input type="radio" name="bank" />
              <label>Bank</label>
            </div>
            <img src="/assets/payment-icons.svg" alt="credit card icons" />
          </div>
          <div className="order_item">
            <div className="order_item_info">
              <input type="radio" name="cash-on-delivery" />
              <label>Cash on delivery</label>
            </div>
          </div>
          <div className="coupon_form">
            <input
              className="coupon_input"
              type="text"
              placeholder="Coupon Code"
              name="coupon-code"
            />
            <div className="coupon_button">
              <button type="submit" className="primary-cta">
                Apply Coupon
              </button>
            </div>
          </div>
          <div className="order_summary_button">
            <button className="primary-cta">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

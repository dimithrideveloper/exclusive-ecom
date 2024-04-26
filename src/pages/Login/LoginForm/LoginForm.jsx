// Style Imports
import "./LoginForm.css";

export default function LoginForm() {
  return (
    <div className="signup_container">
      <img src="/assets/login-img.png" alt="" className="form_img" />
      <div className="signup_form">
        <h2 className="form_heading">Login to Exclusive</h2>
        <p className="form_description">Enter your details below</p>
        <form action="#" className="signup">
          <input
            type="text"
            className="signup_field"
            placeholder="Email or Phone"
            name="emai"
            required
          />
          <input
            type="password"
            className="signup_field"
            placeholder="Password"
            name="password"
            required
          />
          <div className="form_buttons">
            <button className="primary-cta" type="submit">
              Login
            </button>
            <button className="no_bg_cta">Forgot Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Project imports
import { Link } from "react-router-dom";
// Style Imports
import "./SignUpForm.css";

export default function SignUpForm() {
  return (
    <div className="signup_container">
      <img src="/assets/login-img.png" alt="" className="form_img" />
      <div className="signup_form">
        <h2 className="form_heading">Create an account</h2>
        <p className="form_description">Enter your details below</p>
        <form action="#" className="signup">
          <input
            type="text"
            className="signup_field"
            placeholder="Name"
            name="name"
            required
          />
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
          <button className="primary-cta" type="submit">
            Create Account
          </button>
          <button className="google_cta">
            <img
              src="/assets/google-icon.svg"
              alt="google-icon"
              className="google_icon"
            />
            Sign up with Google
          </button>
        </form>
        <p className="form_other_text">
          Already have an account?
          <Link to="/login" className="login_link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

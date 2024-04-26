import React from "react";
import "./ContactDetails.css";

export default function ContactDetails() {
  return (
    <div className="layout">
      <div className="contact_details_container">
        <div className="contact_details">
          <div className="contact_details_title">
            <img
              className="contact_details_icon"
              src="/assets/callus-icon.svg"
              alt="call icon"
            />
            <h3 className="contact_details_heading">Call to us</h3>
          </div>
          <div className="contact_details_desc">
            <p className="contact_details_text">
              We are available 24/7, 7 days a week.
            </p>
            <p className="contact_details_text">Phone: +8801611112222</p>
          </div>
          <hr className="contact_details_divider" />

          <div className="contact_details_title">
            <img
              className="contact_details_icon"
              src="/assets/mailus-icon.svg"
              alt="mail icon"
            />
            <h3 className="contact_details_heading">Write to us</h3>
          </div>
          <div className="contact_details_desc">
            <p className="contact_details_text">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="contact_details_text">
              Emails: customer@exclusive.com
            </p>
            <p className="contact_details_text">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>
        <div className="contact_form">
          <form className="contact" action="#">
            <div className="contact_inputs">
              <input
                className="contact_form_field"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                className="contact_form_field"
                placeholder="Your Email"
                type="email"
                name="email"
                required
              />
              <input
                className="contact_form_field"
                type="tel"
                name="phone"
                placeholder="Your Phone"
                required
              />
            </div>

            <textarea
              className="contact_form_field"
              name="message"
              cols="50"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <div className="contact_form_button">
              <button className="primary-cta">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

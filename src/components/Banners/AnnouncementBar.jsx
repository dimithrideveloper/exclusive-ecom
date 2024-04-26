import React from "react";
import { useState } from "react";
import "./AnnouncementBar.css";

export default function AnnouncementBar() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { code: "en", label: "English" },
    { code: "gr", label: "Greek" },
    { code: "fr", label: "French" },
  ];

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="announcementBar">
      <p className="announcementBar_text">
        Summer sale for all swim suits and free express delivery - OFF 50%!
        <a
          href="/shop"
          class="bold-underline"
          aria-label="Shop Now for the Summer Sale"
        >
          Shop Now
        </a>
      </p>
      <div className="announcementBar_dropdown">
        <select
          className="announcementBar_dropdown_select"
          value={selectedLanguage}
          onChange={handleChange}
        >
          {languages.map((lang) => (
            <option key={lang.code}>{lang.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

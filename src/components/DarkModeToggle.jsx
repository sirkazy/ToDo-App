import React from "react";
import "../Styles/DarkModeToggle.css";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      <span className="darklight-icon">{darkMode ? "☀️" : "🌙"}</span>
      <span className="darklight-text">{darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</span>
    </button>
  );
};

export default DarkModeToggle;

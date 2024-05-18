import React, { useEffect } from "react";
import "./DarkTheme.css";

export function DarkTheme() {
  useEffect(() => {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }

    const switchTheme = (e) => {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        document.body.style.backgroundImage =
          'url("http://localhost:5173/src/assets/bg11.jpg")'; // Change to your dark mode background image
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        document.body.style.backgroundImage =
          'url("http://localhost:5173/src/assets/bg500.webp")'; // Change to your light mode background image
      }
    };

    toggleSwitch.addEventListener("change", switchTheme);

    return () => {
      toggleSwitch.removeEventListener("change", switchTheme);
    };
  }, []);
  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" class="switch" />
      </label>
    </div>
  );
}
export default DarkTheme;

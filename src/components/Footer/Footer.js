import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_icons">
          <a
            href="https://www.linkedin.com/in/zulangy-satizabal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin btn"></i>
          </a>
          <a
            href="https://github.com/ZulangySatizabal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github btn"></i>
          </a>
          <a href="mailto:zulangysatizabal@gmail.com">
            <i className="fa-solid fa-envelope btn"></i>
          </a>
        </div>
        <div className="footer_info">
          <p>Calculadora Interactiva - React con FREECODECAMP</p>
          <h4>Zulangy Satizabal</h4>
          <p>2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import logo from "./images/react-icon-small.png";

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} className="nav--icon" />
        <h3 className="nav--logo_text">React Facts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

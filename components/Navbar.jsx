import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="logo" />
        <h1>Navbar component</h1>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src="components/images/react-icon-small.png" />
        <h3>React Facts</h3>
        <h4>React Course - Project 1</h4>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

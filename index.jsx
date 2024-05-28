import React from "react";
import ReactDOM from "react-dom/client";

const navbar = (
  <div>
    <h1>Garden Goods</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
);

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);

// root.render(navbar);

ReactDOM.createRoot(document.getElementById("root")).render(navbar);

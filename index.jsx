import React from "react";
import ReactDOM from "react-dom/client";

const page = (
  <div>
    <img src="./react-logo.png" width="40px" alt="react logo" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);

// root.render(navbar);

ReactDOM.createRoot(document.getElementById("root")).render(page);

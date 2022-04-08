import React from "react";
import ReactDOM from "react-dom";

const navbar = (
  <nav>
    <h1>My Website</h1>
    <ul>
      <li>About</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));

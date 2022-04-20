import React from "react";
import smallLogo from "../images/react-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={smallLogo} alt="SmallLogo" className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Project 1 </h4>
    </nav>
  );
}

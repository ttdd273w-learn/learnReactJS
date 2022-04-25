import React from "react";
import Person1 from "../images/person1.png";
import Star from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={Person1} alt="person1" className="card--image" />

      <div className="card--stats">
        <img className="card--star" src={Star} alt="star" />
        <span>5.0 </span>
        <span>(6) •</span>
        <span>USA</span>
      </div>

      <p>Life lessons with Katie Zaferes</p>
      <p>
        <b>From $316 </b>/ person
      </p>
    </div>
  );
}

import React from "react";
import Star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.country === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`../images/${props.img_source}`}
        alt="person1"
        className="card--image"
      />
      <div className="card--stats">
        <img className="card--star" src={Star} alt="star" />
        <span>{props.rating} </span>
        <span>({props.reviewCount}) •</span>
        <span>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <b>From ${props.price} </b>/ person
      </p>
    </div>
  );
}

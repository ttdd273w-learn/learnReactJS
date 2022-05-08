import React from "react";
import Star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        // src={`../images/${props.img}`}
        // src={require({`../images/${props.img}`})}
        src={props.img_source}
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

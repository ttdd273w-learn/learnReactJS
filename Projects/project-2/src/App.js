import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";

export default function App() {
  const cards = Data.map((card) => <Card key={card.id} {...card} />);
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

/* <Card
  img_source={require("./images/person1.png")}
  rating={5.0}
  reviewCount={6}
  location="USA"
  title="Life Lessons with Katie Zaferes"
  price={136}
/>; */

import MemesData from "../memesData";
import React from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memes = MemesData.data.memes;
    const randomNum = Math.floor(Math.random() * memes.length);
    const url = memes[randomNum].url;
    setMemeImage(url);
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          className="form--input"
        ></input>
        <input
          type="text"
          placeholder="Bottom Text"
          className="form--input"
        ></input>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}

import MemesData from "../memesData";
import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(MemesData);

  function getMemeImage() {
    const memes = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memes.length);
    const url = memes[randomNum].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
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
      <div>
        <h1 className="meme--top-text">{meme.topText}</h1>
        <img src={meme.randomImage} className="meme--image" alt="meme" />
        <h1 className="meme--bottom-text">{meme.bottomText}</h1>
      </div>
    </main>
  );
}

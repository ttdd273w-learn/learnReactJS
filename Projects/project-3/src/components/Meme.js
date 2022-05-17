import MemesData from "../memesData";

export default function Meme() {
  function getMemeImage() {
    const memes = MemesData.data.memes;
    const randomNum = Math.floor(Math.random() * memes.length);
    const url = memes[randomNum].url;
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
    </main>
  );
}

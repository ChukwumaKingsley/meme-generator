import memesData from "../memesData";
import { useState } from "react";

function Form() {
  // Destructure memes data directly
  const { memes } = memesData.data;

  const getRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * memes.length);
    return memes[randomNumber].url;
  };

  const [imageUrl, setImageUrl] = useState("/images/troll-face.png");

  const changeImage = () => {
    setImageUrl(getRandomImage());
  };

  return (
    <div className="Form">
      <section className="meme-text-input">
        <input type="text" className="top-text" placeholder="Enter top meme text" />
        <input type="text" className="bottom-text" placeholder="Enter bottom meme text" />
      </section>
      <button className="get-image-button" onClick={changeImage}>
        Get a new meme image 🖼
      </button>
      <section className="meme">
      <img src={imageUrl} className="meme-image" alt="Meme" />
        <p className="meme-text-top">Top text</p>
        <p className="meme-text-bottom">Bottom text</p>
      </section>
      <div className="meme-text-format">
        <button className="add-meme-text-size">-</button>
        <span className="meme-text-format-text">Change text size</span>
        <button className="reduce-meme-text-size">+</button>
      </div>
    </div>
  );
}

export default Form;

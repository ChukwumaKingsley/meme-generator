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

  const [formData, setFormData] = useState({
    topMemeText: 'top meme text',
    bottomMemeText: ''
  })

  function chageFormData(event) {
    const {name, value} = event.target
    setFormData(prevData => {
      return {...prevData,
      [name]: value}
    })
  }

  const [fontsize, setFontSize] = useState("")

  return (
    <div className="Form">
      <section className="meme-text-input">

        <input type="text" className="top-text" placeholder="Enter top meme text" value={formData.topMemeText} name='topMemeText' onChange={chageFormData}/>

        <input type="text" className="bottom-text" placeholder="Enter bottom meme text" value={formData.bottomMemeText} name='bottomMemeText' onChange={chageFormData} />

      </section>


      <button className="get-image-button" onClick={changeImage}>
        Get a new meme image 🖼
      </button>


      <section className="meme">

      <img src={imageUrl} className="meme-image" alt="Meme" />

        <p className="meme-text-top">{formData.topMemeText}</p>
        <p className="meme-text-bottom">{formData.bottomMemeText}</p>

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

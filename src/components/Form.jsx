import memesData from "../memesData"

import { useState } from "react"

function Form() {
    function getRandomImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        return memesArray[randomNumber].url
    }

    const [ImageUrl, setImageURL] = useState("")

    function changeImage() {
        setImageURL(url => getRandomImage())
    }
    

    return (
        <div className="Form">
            <section className="meme-text-input">
                <input type="text" className="top-text" placeholder="Enter top meme text" />
                <input type="text" className="bottom-text" placeholder="Enter bottom meme text" />
            </section>
            <button className="get-image-button" onClick={changeImage}>
                Get a new meme image  🖼
            </button>
            <img src={ImageUrl} className="meme-image" />
        </div>
    )
}

export default Form
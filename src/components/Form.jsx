function Form() {
    function func() {
            console.log("I was clicked!")
        }
    return (
        <form className="Form">
            <section className="meme-text-input">
                <input type="text" className="top-text" placeholder="Enter top meme text" />
                <input type="text" className="bottom-text" placeholder="Enter bottom meme text" />
            </section>
            <button className="get-image-button" onClick={func}>Get a new meme image  🖼</button>
        </form>
    )
}

export default Form
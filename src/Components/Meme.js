import React from "react";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomIndex].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form-input1"
          type="text"
          placeholder="Enter top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          className="form-input2"
          type="text"
          placeholder="Enter bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
      </div>
      <button className="form--input" onClick={getMemeImage}>
        <p className="btn-text">Get a new meme image</p>
        <img
          className="btn-icon"
          src="https://visualpharm.com/assets/35/Add%20Image-595b40b65ba036ed117d11db.svg"
          alt="imgicon"
        />
      </button>
      <div className="meme">
        <img
          src={meme.randomImage}
          alt="meme-is-here"
          className="meme--image"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;

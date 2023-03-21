import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="title">
        <img
          className="meme--face"
          src="https://i.kym-cdn.com/photos/images/original/000/538/955/4a3.png"
          alt="meme-face"
        />
        <p className="title-text">Meme Generator</p>
      </div>
      <p className="subtitle-text">React Course - Project 3</p>
    </header>
  );
}

export default Header;

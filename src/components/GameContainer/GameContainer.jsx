import React, { useState } from "react";
import starImg from "../../Assets/star.png";
import "./GameContainer.css";
import { config } from '../../Assets/config.js'

function GameContainer({
  gameImage,
  gameName,
  gameRating,
  gamePltarforms,
  releaseDate,
}) {
  let platformArray = [];
  for (const parentPlatform of gamePltarforms) {
    const platform = config.platforms.find(platform=> platform.id === parentPlatform.platform.id)
    platformArray.push(platform.icon)
  }
  function isGolden() {
    if (gameRating >= 8.5) {
      return "golden";
    } else {
      return "";
    }
  }
  return (
    <div className={`card ${isGolden()}`}>
      <img key={1} src={gameImage} alt={gameName} className="game-image" />
      <div className="platforms">
        {platformArray.map((platform) => (
          <img src={platform} className="platformImage" />
        ))}
      </div>
      <h2 className="game-name">{gameName}</h2>
      <div className="extra-details">
        <p className="release-date">
          <span className="text-color">Release date: </span>
          {releaseDate}
        </p>
        <div className="rating">
          <p className="release-date">{gameRating}</p>
          <img src={starImg} alt="rating star" />
        </div>
      </div>
    </div>
  );
}

export default GameContainer;
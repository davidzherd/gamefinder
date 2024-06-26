import React, { useEffect, useState } from "react";
import "./Home.css";
import userImage from "../../Assets/codplayer.png";
import GameContainer from "../../components/GameContainer/GameContainer";
import Button from "../../components/Button/Button";
import axios from "axios";

const Home = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nextGames, setNextGames] = useState("");

  function checkSessionStorage() {
    const stringObject = sessionStorage.getItem("homepage-games");
    if (stringObject) {
      const parsedObject = JSON.parse(stringObject);
      setGames(parsedObject.gamesArray);
      setNextGames(parsedObject.nextURL);
    } else {
      data();
    }
  }
  function saveGamesArray(array, nextGamesURL) {
    const objectForSave = { gamesArray: array, nextURL: nextGamesURL };
    const objectString = JSON.stringify(objectForSave);
    sessionStorage.setItem("homepage-games", objectString);
  }
  const data = async (
    nextURL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
  ) => {
    try {
      setIsLoading(true);
      const response = await axios.get(nextURL);
      const newGamesArray = games.concat(response.data.results);
      setGames(newGamesArray);
      setError(null);
      setNextGames(response.data.next);
      saveGamesArray(newGamesArray, response.data.next);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkSessionStorage();
  }, []);
  return (
    <div className="App">
      <div className="align-center">
        <h1 className="page-title">
          Welcome to <span className="secondery-clr">Game</span>
          <span className="text-color">Finder</span>
        </h1>
        <h3>
          These are some popular games you might want to try! The best rated
          games will be marked as <span style={{ color: "gold" }}>golden!</span>
        </h3>
      </div>
      <div className="semi-transparent main-image">
        <img src={userImage} alt="Call of duty player" />
      </div>
      <div className="games-container">
        {error && (
          <p className="text-color">
            Sorry we had an issue getting data, please try again later!
          </p>
        )}
        {games &&
          games.map((game) => (
            <GameContainer
              key={game.id}
              gameRating={Math.round(game.rating * 20) / 10}
              gamePltarforms={game.parent_platforms}
              gameName={game.name}
              gameImage={game.background_image}
              releaseDate={game.released}
            />
          ))}
      </div>
      <div className="center margin-1rem">
        {isLoading && <div className="custom-loader"></div>}
        <Button style="outline-btn" action={() => data(nextGames)}>
          Load More Games
        </Button>
      </div>
      <p className="release-date align-center">
        You can also find more games with filtering options at the Find a game
        page!
      </p>
    </div>
  );
};

export default Home;

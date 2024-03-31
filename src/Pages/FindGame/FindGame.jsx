import React, { useState } from "react";
import Search from "../../components/Search/Search.jsx";
import "./FindGame.css";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import GameContainer from "../../components/GameContainer/GameContainer.jsx";
import axios from "axios";

function FindGame() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGaneres, setsSlectedGaneres] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  function handleSearchInput(event) {
    setSearchTerm(event.target.value);
  }
  async function handleSearchClick(event) {
    try {
      const params = {
        key: process.env.REACT_APP_API_KEY,
        ...(searchTerm !== "" && { search: searchTerm }),
        ...(selectedGaneres.toString() !== "" && {
          genres: selectedGaneres.toString().toLocaleLowerCase(),
        }),
        ...(selectedPlatforms.toString() !== "" && {
          parent_platforms: selectedPlatforms.toString().toLocaleLowerCase(),
        }),
      };
      const response = await axios.get("https://api.rawg.io/api/games", {
        params: params,
      });
      setGames(response.data.results);
    } catch (err) {
      console.error(err);
    }
  }
  function filterClick(filterName, filterType) {
    let newFilters;
    if (filterType === "platform") {
      setSelectedPlatforms((currentPlatforms) => {
        currentPlatforms.includes(filterName)
          ? (newFilters = [...currentPlatforms].filter(
              (filter) => filter !== filterName
            ))
          : (newFilters = [...currentPlatforms, filterName]);
        return newFilters;
      });
    } else {
      setsSlectedGaneres((currentGaneres) => {
        currentGaneres.includes(filterName)
          ? (newFilters = [...currentGaneres].filter(
              (filter) => filter !== filterName
            ))
          : (newFilters = [...currentGaneres, filterName]);
        return newFilters;
      });
    }
    console.log(selectedGaneres, selectedPlatforms);
  }
  return (
    <div className="App">
      <header className="mt-1rm bg-333 pb-2rm">
        <h1 className="center-title">Find a Game</h1>
        <Search
          inputAction={handleSearchInput}
          clickAction={handleSearchClick}
          inputValue={searchTerm}
        />
        <FilterBar
          currentPlatforms={selectedPlatforms}
          currentGaneres={selectedGaneres}
          filterAction={filterClick}
        />
      </header>
      <main className="margin-1rem">
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
      </main>
    </div>
  );
}

export default FindGame;

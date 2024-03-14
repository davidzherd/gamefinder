import React, { useState } from 'react'
import Search from '../../components/Search/Search.jsx'
import './FindGame.css'
import FilterBar from '../../components/FilterBar/FilterBar.jsx';
import GameContainer from '../../components/GameContainer/GameContainer.jsx';
function FindGame() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGaneres, setsSlectedGaneres] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [games, setGames] = useState([]);
  const [error, setError] = useState('');

  function handleSearchInput(event){
    setSearchTerm(event.target.value);
  }
  function handleSearchClick(event){
    console.log(searchTerm);
    // here will send api call to search for games with the search term
  }
  function filterClick(filterName, filterType){
    let newFilters;
    if(filterType === "platform"){
      setSelectedPlatforms((currentPlatforms)=>{
        currentPlatforms.includes(filterName) ? (newFilters = [...currentPlatforms].filter(filter=> filter !== filterName)) : (newFilters = [...currentPlatforms, filterName]);
        return newFilters;
      })
    }else{
      setsSlectedGaneres((currentGaneres)=>{
        currentGaneres.includes(filterName) ? (newFilters = [...currentGaneres].filter(filter=> filter !== filterName)) : (newFilters = [...currentGaneres, filterName]);
        return newFilters;
      });
    }
  }
  return (
    <div className='App'>
      <header className='mt-1rm bg-333 pb-2rm'>
        <h1 className='center-title'>Find a Game</h1>
        <Search inputAction={handleSearchInput} clickAction={handleSearchClick} inputValue ={searchTerm} />
        <FilterBar currentPlatforms={selectedPlatforms} currentGaneres={selectedGaneres} filterAction={filterClick} />
      </header>
      <main>
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
  )
}

export default FindGame

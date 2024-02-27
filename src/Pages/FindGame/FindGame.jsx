import React, { useState } from 'react'
import Search from '../../components/Search/Search.jsx'
import './FindGame.css'
import FilterBar from '../../components/FilterBar/FilterBar.jsx';
function FindGame() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchInput(event){
    setSearchTerm(event.target.value);
  }
  function handleSearchClick(event){
    console.log(searchTerm);
    // here will send api call to search for games with the search term
  }
  return (
    <div className='App'>
      <header className='mt-1rm bg-333 pb-2rm'>
        <h1 className='center-title'>Find a Game</h1>
        <Search inputAction={handleSearchInput} clickAction={handleSearchClick} inputValue ={searchTerm} />
        <FilterBar />
      </header>
    </div>
  )
}

export default FindGame

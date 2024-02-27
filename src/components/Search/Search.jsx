import React from 'react'
import Button from '../Button/Button'
import './Search.css'
function Search({ clickAction,inputAction, inputValue},...props) {
  function filterEnter(event){
    if(event.key === "Enter"){
      clickAction();
    }
  }
  return (
    <div className='search-box'>
      <input type="text" className='search-input' placeholder='Search for a game name' value={inputValue} onChange={inputAction} onKeyUp={filterEnter}/>
      <Button style="fill-btn" action={clickAction}>Search</Button>
    </div>
  )
}

export default Search

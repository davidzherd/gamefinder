import React from 'react'
import './FilterBar.css'
import { config } from '../../assets/config.js'
function FilterBar() {
    const platforms = [{id:1,name:"PC",url:"pc"},{id:2,name:"PlayStation",url:"playstation"},{id:3,name:"Xbox",url:"xbox"},{id:4,name:"iOS",url:"ios"},{id:8,name:"Android",url:"android"},{id:5,name:"MAC",url:"mac"},{id:6,name:"Linux",url:"linux"},{id:7,name:"Nintendo",url:"nintendo"},{id:9,name:"Atari",url:"atari"},{id:10,name:"Commodore / Amiga",url:"commodore-amiga"},{id:11,name:"SEGA",url:"sega"},{id:12,name:"3DO",url:"3do"},{id:13,name:"Neo Geo",url:"neo-geo"},{id:14,name:"WEB",url:"web"}];
    const ganres = [{name:"Action", url:"action"}, {name:"Indie", url:"indie"}, {name:"Adventure", url:"adventure"}, {name:"RPG", url:"role-playing-games-rpg"}, {name:"Strategy", url:"strategy"}, {name:"Shooter", url:"shooter"},{name:"Casual", url:"casual"}, {name:"Simulation", url:"simulation"}, {name:"Puzzle", url:"puzzle"}, {name:"Arcade", url:"arcade"}, {name:"Platformer", url:"plafrormer"},{name:"Racing", url:"racing"}, {name:"MMO", url:"massively-multiplayer"}, {name:"Sports", url:"sports"}, {name:"Fighting", url:"fighting"}, {name:"Family", url:"family"}, {name:"Board Games", url:"board-games"}, {name:"Educational", url:"educational"}, {name:"Cards", url:"card"}];
  return (
    <menu className='row center gap-1 pl-0'>
      <h2>Platforms</h2>
      {config.platforms.map((platform=><img className='platformImage' key={platform.id} src={platform.icon} alt={platform.name}/>))}
      <h2>Generes</h2>
      {ganres.map((ganre=><p className='filter-text'>{ganre.name}</p>))}
    </menu>
  )
}

export default FilterBar

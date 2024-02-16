import React from 'react'
import starImg from '../../assets/star.png'
import './GameContainer.css'
import ios from '../../assets/ios.png'
import android from '../../assets/android.png'
import xbox from '../../assets/xbox.png'
import ps from '../../assets/ps.png'
import windows from '../../assets/windows.png'
import nintendo from '../../assets/ios.png'

function GameContainer({ gameImage,gameName,gameRating,gamePltarforms,releaseDate }) {
  const platforms = [ios, android, xbox,ps,windows,nintendo];
  return (
    <div className='card'>
      <img key={1} src={gameImage} alt={gameName} className='game-image'/>
      <div className='platforms'>{platforms.map(platform=><img src={platform} className='platformImage'/>)}</div>
      <h2 className='game-name'>{gameName}</h2>
      <div className='extra-details'>
      <p className='release-date'><span className='text-color'>Release date: </span>{releaseDate}</p>
      <div className='rating'>
        <p className='release-date'>{gameRating}</p>
        <img src={starImg} alt='rating star' />
      </div>
      </div>
    </div>
  )
}

export default GameContainer

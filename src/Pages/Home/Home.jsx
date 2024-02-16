import React, { useEffect, useState } from 'react'
import './Home.css'
import userImage from '../../assets/codplayer.png'
import GameContainer from '../../components/GameContainer/GameContainer'
import Button from '../../components/Button/Button'
const Home = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nextGames, setNextGsames] = useState("");
  const data = async (url=`https://api.rawg.io/api/games?key=9d556c4cd201463ea9431c04bd8fe592`)=>{
      try{
          setIsLoading(true);
          const response = await fetch(url);
          const results = await response.json();
          console.log(results);
          setGames(games.concat(results.results));
          setNextGsames(results.next);
      }catch (e) {
        setError(e);
      }finally{
        setIsLoading(false);
      }
    };
  useEffect(()=>{
    games.length === 0 && data();
  },[])
  return (
    <div className='App'>
      <div className='align-center'>
      <h1 className='page-title'>Welcome to <span className='secondery-clr'>Game</span><span className='text-color'>Finder</span></h1>
      <h3>These are some popular games you might want to try!</h3>
      </div>
      <div className='semi-transparent main-image'>
        <img src={userImage} alt='Call of duty player' />
      </div>
      <div className='games-container'>
        {error && <p className='text-color'>Sorry we had an issue getting data, please try again later!</p>}
        {games && games.map((game)=><GameContainer key={game.id} gameRating={Math.round(game.rating * 20)/10} gamePltarforms={game.pltarforms} gameName={game.name} gameImage={game.background_image} releaseDate={game.released} />)}
      </div>
      <div className='center margin-1rem'>
        {isLoading && <div className="custom-loader"></div>}
        <Button style='outline-btn' action={()=>data(nextGames)}>Load More Games</Button>
      </div>
      <p className='release-date align-center'>You can also find more games with filtering options at the Find a game page!</p>
    </div>
  )
}

export default Home

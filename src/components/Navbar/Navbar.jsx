import React, { useState } from 'react'
import './Navbar.css'
import controllerImg from '../../assets/controller.png'
import { Link } from 'react-router-dom';

function Navbar() {
    const pages = [{name:'Home', link:"/"}, {name:'Find a game', link:"/findgame"}, {name:'About Us', link:"/about"}];
    const [page,setPage] = useState('Home')
    function handlePageSelection(pageName){
        setPage(pageName);
    }
  return (
    <nav>
      <Link className='remove-link' to="/">
        <div className='logo' onClick={()=>handlePageSelection('Home')}>
        <h1>Game<span className='text-color'>Finder</span></h1>
        <img width="64" height="64" src={controllerImg} alt="controller"/>
        </div>
      </Link>
        <ul>
          {pages.map(item=><Link className='remove-link' key={item.name} to={item.link}><li className={item.name===page ? 'selected': null} onClick={()=>handlePageSelection(item.name)}>{item.name}</li></Link>)}
        </ul>
             
        
    </nav>
  )
}

export default Navbar

import React, { useEffect, useState } from 'react'
import './FilterBar.css'
import { config } from '../../assets/config.js'
import Tooltip from '../Tooltip/Tooltip.jsx';
import Button from '../Button/Button.jsx';
function FilterBar({ currentPlatforms, currentGaneres, filterAction },...props) {
  const allFilters = [...config.ganres, ...config.platforms];
  useEffect(() => {
    const handleResize = () => {
      setComponentType(window.innerWidth < 900 ? false : true);
    };
  
    // Listen for the resize event and call handleResize
    window.addEventListener('resize', handleResize);
  
    // Call handleResize immediately to set the initial state
    handleResize();
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [componentType, setComponentType] = useState(true)
  const desktop = 
  <menu className='filter-menu pl-0'>
    <span className='filter-type center gap-05'>
      <h2>Platforms</h2>
      {config.platforms.map((platform=><div title={platform.name} key={platform.id} className={currentPlatforms.includes(platform.name) ? "has-tootip selected-filter" : "has-tootip"} onClick={()=>filterAction(platform.name, "platform")}><Tooltip tip={platform.name}/><img className='platformImage' key={platform.id} src={platform.icon} alt={platform.name}/></div>))}
    </span>
    <span className='filter-type center gap-05'>
      <h2>Ganres</h2>
      {config.ganres.map((ganre=><div title={ganre.name} key={ganre.id} className={currentGaneres.includes(ganre.name) ? "has-tootip selected-filter" : "has-tootip"} onClick={()=>filterAction(ganre.name, "ganre")}><Tooltip tip={ganre.name}/><img className='platformImage' key={ganre.id} src={ganre.icon} alt={ganre.name}/></div>))}
    </span>
  </menu>;
  const mobile = <div className='margin-1rem mobile-layout'>
    <Button style="fill-btn" action={()=>console.log("click")}>Apply Filters</Button>
    <span className='filter-type center gap-05 align-center'>
      <h2>Applied filters</h2>
      <div>{allFilters.map((filter=><div title={filter.name} key={filter.name} className="has-tootip"><Tooltip tip={filter.name}/><img className='platformImage' key={filter.name} src={filter.icon} alt={filter.name}/></div>))}</div>
    </span>
    </div>
  return (
    componentType ? desktop : mobile
  )
}

export default FilterBar

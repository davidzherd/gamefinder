import React, { useEffect, useState } from 'react'
import './FilterBar.css'
import { config } from '../../Assets/config.js'
import Tooltip from '../Tooltip/Tooltip.jsx';
import Button from '../Button/Button.jsx';

export function MobileFilters({ currentPlatforms, currentGaneres, filterAction, closeModal },...props) {
  return (
    <div className='mobile-filter-wrap'>
      <header className='header-with-exit'>
        <h2>Select Filters</h2>
        <button className='exit' onClick={closeModal}>X</button>
      </header>
      <main className='mobile-filters'>
        <div className=' ml-1'>
          <h2>Platforms</h2>
          <div>{config.platforms.map((platform=><button className={currentPlatforms.includes(platform.name) ? 'ganre-btn selected-filter' : 'ganre-btn'} onClick={()=>filterAction(platform.name, "platform")} key={platform.name}>{platform.name}</button>))}</div>
        </div>
        <div className=' ml-1'>
          <h2>Ganres</h2>
          <div>{config.ganres.map((ganre=><button className={currentGaneres.includes(ganre.name) ? 'ganre-btn selected-filter' : 'ganre-btn'} onClick={()=>filterAction(ganre.name, "ganre")} key={ganre.name}>{ganre.name}</button>))}</div>
        </div>
      </main>
    </div>
  )
}


function FilterBar({ currentPlatforms, currentGaneres, filterAction },...props) {
  const [modalOpen, setModalOpen] = useState(false);
  const allFilters = [...currentGaneres, ...currentPlatforms];
  const allFiltersObjects = [...config.ganres,...config.platforms];
  useEffect(() => {
    const handleResize = () => {
      setComponentType(window.innerWidth < 900 ? false : true);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
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
  const mobile = <div className='margin-1rem mobile-layout-column'>
    <Button style="fill-btn" action={()=>setModalOpen(true)}>Apply Filters</Button>
    {allFilters.length > 0 ? <h2>Applied filters</h2> : <h2>You didn't apply any filters!</h2>}
    <div className='filter-type center gap-05 align-center mobile-layout-row'>
      {allFilters.map(((filter)=><img className='platformImage' key={filter} src={allFiltersObjects.filter(f=>f.name === filter)[0].icon} alt={filter}/>))}
    </div>
    {modalOpen ? <MobileFilters currentPlatforms={currentPlatforms} currentGaneres={currentGaneres} filterAction={filterAction} closeModal={()=>setModalOpen(false)}/> : null}
    </div>

  return (
    componentType ? desktop : mobile
  )
}

export default FilterBar

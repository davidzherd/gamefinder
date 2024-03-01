import React, { useState } from 'react'
import './Tooltip.css'
function Tooltip({ tip }) {
  return (
    <div className='tool-tip-wrap'>
      <p className='tip'>{tip}</p>
    </div>
  )
}

export default Tooltip

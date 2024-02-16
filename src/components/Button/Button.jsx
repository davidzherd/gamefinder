import React from 'react'
import './Button.css'
const Button = ({ style, children, action }) => {
  return (
    <button onClick={action} className={style}>{children}</button>
  )
}

export default Button

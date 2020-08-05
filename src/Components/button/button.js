import React from 'react'
import './button.scss'

const Button = (props) => {
  const buttonClass = `button_${props.type}`
  return(<button className={buttonClass} onClick={props.handleClick}>
    {props.text}
  </button>)
}



export default Button
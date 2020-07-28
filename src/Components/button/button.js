import React from 'react'
import './button.scss'

const Button = (props) => {
  const classButton = `button-${props.type}`
  return(<button className={props.className} onClick={props.handleClick} type={props.type}>
    {props.text}
  </button>)
}



export default Button
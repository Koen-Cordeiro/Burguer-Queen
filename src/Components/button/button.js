import React from 'react'
import './button.scss'

const Button = (props) => {
  return(<button className={props.buttonClass} onClick={props.handleClick} type={props.type}>
    {props.text}
  </button>)
}



export default Button
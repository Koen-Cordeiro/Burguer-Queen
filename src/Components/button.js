import React from 'react'

const Button = (props) => (
  <button className={props.buttonClass} onClick={props.handleClick} type={props.type}>
    {props.text}
  </button>
)

export default Button
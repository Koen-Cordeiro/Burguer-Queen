import React from 'react'

const Button = (props) => (
  <button value={props.value} name={props.name} className={props.inputClass} onClick={props.handleClick} type={props.type}>
    {props.text}
  </button>
)

export default Button
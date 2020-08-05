import React from 'react'
import './input.scss'

const Input = (props) => {
  const inputClass = `input__${props.use}--${props.specific}`

  return (
    <label className={inputClass}>{props.label}
      <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onClick={props.handleClick} onChange={props.handleChange} required />
      {props.textRadio}
    </label>
  )
}

export default Input
import React from 'react'
import './input.scss'

const Input = (props) => {
  const inputClass = `input-${props.use}-${props.specific}`

  return (
    <label className={inputClass}>{props.text}
      <input value={props.value} name={props.name} onChange={props.handleChange} type={props.type} placeholder={props.placeholder} required />
      {props.textRadio}
    </label>
  )
}

export default Input
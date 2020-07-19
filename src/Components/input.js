import React from 'react'

const Input = (props) => (
  <>
    <label>{props.text}</label>
    <input value={props.value} className={props.inputClass} onChange={props.handleChange} type={props.type} />
  </>
)

export default Input
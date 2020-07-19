import React from 'react'

const Input = (props) => (
  <>
    <label>{props.text}</label>
    <input value={props.value} className={props.inputClass} type={props.type} />
  </>
)

export default Input
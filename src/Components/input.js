import React from 'react'

const Input = (props) => (
    <label>{props.text}
    <input value={props.value} name={props.name} className={props.inputClass} onChange={props.handleChange} type={props.type} />
    </label>
)

export default Input
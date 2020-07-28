import React from 'react'

const Input = (props) => {
    const inputClass = `input-${props.use}`
    
    return (
    <label className={props.componentClass}>{props.text}
    <input value={props.value} name={props.name} className={props.inputClass} onChange={props.handleChange} type={props.type} required/>
    {props.textRadio}
    </label>
)}

export default Input
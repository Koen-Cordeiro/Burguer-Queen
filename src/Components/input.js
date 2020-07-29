import React from 'react'

const Input = (props) => (
    <label className={props.componentClass}>{props.text}
    <input value={props.value} name={props.name} className={props.inputClass} onChange={props.handleChange} type={props.type} placeholder={props.placeholder} required/>
    {props.textRadio}
    </label>
)

export default Input
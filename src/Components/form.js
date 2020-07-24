import React from 'react'

const Form = (props) => (
  <form className={props.formClass}>
    {props.arrInput.map((e,index) => ( 
      <label className={e.labelClass}>
        {e.text}
        <input key={index} value={e.value} name={e.name} className={e.inputClass} onChange={e.handleChange} type={e.type} placeholder={e.placeholder} required/>
        {e.textRadio}
        <span>{e.span}</span>
      </label>
    ))}
  </form>
)

export default Form

{/* <fieldset className={props.fieldsetClass}>
      <legend>{props.legend}</legend>
    </fieldset> */}
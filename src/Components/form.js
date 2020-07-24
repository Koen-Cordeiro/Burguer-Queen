import React from 'react'
import Button from './button'


const Form = (props) => (
  <form className={props.formClass}>
    {props.arrInput.map((e,index) => ( 
      <label key={index} className={e.labelClass}>
        {e.text}
        <input  value={e.value} name={e.name} className={e.inputClass} onChange={e.handleChange} type={e.type} placeholder={e.placeholder} required/>
        {e.textRadio}
        <span>{e.span}</span>
      </label>
    ))}
    <Button buttonClass='submit-button log-space-after' type='submit' text='ENTRAR' handleClick={(e) => {
              e.preventDefault()
              props.func({ param1, param2 })}}/>
  </form>
)

export default Form

{/* <fieldset className={props.fieldsetClass}>
      <legend>{props.legend}</legend>
    </fieldset> */}
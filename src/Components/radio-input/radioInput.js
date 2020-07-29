import React from 'react'
import Input from '../input/input'
import './radioinput.scss'

const RadioInputArea = (props) => {
  return(
    <label className='reg-work-label log-reg-space-after'>{props.labelText}
    <div onChange={event => props.setValue(event.target.value)} className='input-radio'>
      <Input type='radio' value={props.valueFieldOne} name={'radio'} textRadio={props.textInputOne} />
      <p>ou</p>
      <Input type='radio' value={props.valueFieldTwo} name={'radio'} textRadio={props.textInputTwo} />
    </div>
  </label>)
}



export default RadioInputArea
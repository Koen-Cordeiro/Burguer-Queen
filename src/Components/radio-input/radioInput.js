import React from 'react'
import Input from '../input/input'
import './radioinput.scss'

const RadioInputArea = (props) => {
  return (
    <label className='reg-work-label log-reg-space-after'>{props.labelText}
      <div onChange={event => props.setValue(event.target.value)} className='input-radio'>
        <Input type='radio' value={props.textInputOne} name={'radio'} textRadio={props.textInputOne} />
        <p>ou</p>
        <Input type='radio' value={props.textInputTwo} name={'radio'} textRadio={props.textInputTwo} />
      </div>
    </label>)
}

RadioInputArea.defaultProps = {
  labelText: 'Área de trabalho',
  textInputOne: 'Salão',
  textInputTwo: 'Cozinha'
}



export default RadioInputArea
import React from 'react'
import Input from '../../Components/input/input'
import './radioinput.scss'

const RadioInputArea = (props) => {
  return (
    <label className='workplace'>{props.labelText}
      <div onChange={event => props.setValue(event.target.value)} className='selection'>
        <Input use='work' specific='info' type='radio' value={props.textInputOne} name={'radio'} textRadio={props.textInputOne} />
        <p>ou</p>
        <Input use='work' specific='info' type='radio' value={props.textInputTwo} name={'radio'} textRadio={props.textInputTwo} />
      </div>
    </label>)
}

RadioInputArea.defaultProps = {
  labelText: 'Área de trabalho',
  textInputOne: 'Salão',
  textInputTwo: 'Cozinha'
}

export default RadioInputArea
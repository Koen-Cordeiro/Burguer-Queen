import React from 'react'
import Input from '../input/input'

const MenuItems = (props) => {
  
  return (
    <label className='reg-work-label log-reg-space-after'>{props.labelText}
    <div onChange={event => props.setValue(event.target.value)} className='input-radio'>
      <Input type='radio' value={props.textInputOne} name={'radio'} textRadio={props.textInputOne} />
      <Input type='radio' value={props.textInputTwo} name={'radio'} textRadio={props.textInputTwo} />
      <Input type='radio' value={props.textInputThree} name={'radio'} textRadio={props.textInputThree} />
    </div>
  </label>
)}

export default MenuItems
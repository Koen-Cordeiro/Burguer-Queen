import React from 'react'
import Input from '../input/input'
import Button from '../button/button'
import './burguer-area.scss'

const MenuItems = (props) => {
const setExtras = (e) => {
  const name = e.target.name
  props.checkbox[name]? props.setCheckbox({...props.checkbox, [name]: false}): props.setCheckbox({...props.checkbox, [name]: true})
}

  return (
    <div className='options'>
      <label className='label-burguer'>{props.labelTextOne}
      <div onChange={event => props.setValue(event.target.value)} className='input-radio'>
        <Input type='radio' value={props.textInputOne} name={'radio'} textRadio={props.textInputOne} />
        <Input type='radio' value={props.textInputTwo} name={'radio'} textRadio={props.textInputTwo} />
        <Input type='radio' value={props.textInputThree} name={'radio'} textRadio={props.textInputThree} />
      </div>
      <label className='label-burguer'>Extras
      <Input textRadio={props.extraOne} name={props.extraOne} handleClick={(e)=> setExtras(e)} type='Checkbox' />
      <Input textRadio={props.extraTwo} name={props.extraTwo}  handleClick={(e)=> setExtras(e)} type='Checkbox'/>
      </label>
      <Button text='Adicionar' handleClick={props.burguerClick}/>
      </label>
    </div>
  )
}

MenuItems.defaultProps = {
  textInputOne: 'Bovino',
  textInputTwo: 'Frango',
  textInputThree: 'Vegano',
  labelTextOne: 'Hambúrguer',
  extraOne: 'Ovo',
  extraTwo: 'Queijo'
}

export default MenuItems
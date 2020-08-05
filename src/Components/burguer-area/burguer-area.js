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
      <section className='item__burguer'>
        {props.titleTextOne}
        <div onChange={event => props.setValue(event.target.value)} className='item__burguer--meat'>
          <Input use='burguer' specific='item' type='radio' value={props.textInputOne} name={'radio'} textRadio={props.textInputOne} />
          <Input use='burguer' specific='item' type='radio' value={props.textInputTwo} name={'radio'} textRadio={props.textInputTwo} />
          <Input use='burguer' specific='item' type='radio' value={props.textInputThree} name={'radio'} textRadio={props.textInputThree} />
        </div>
      </section>
      <section className='item__extra'>
        {props.titleTextTwo}{"\u00a0"}<span className='color'>•</span>{"\u00a0"}R${"\u00a0"}{props.price}{"\u00a0"}cada
        <div className='item__extra--choice'>
          <Input use='burguer' specific='item' type='checkbox' textRadio={props.extraOne} name={props.extraOne} handleClick={(e)=> setExtras(e)}  />
          <Input use='burguer' specific='item' type='checkbox' textRadio={props.extraTwo} name={props.extraTwo}  handleClick={(e)=> setExtras(e)} />
        </div>
      </section>
      <Button text='Adicionar' handleClick={props.burguerClick}/>
    </div>
  )
}

MenuItems.defaultProps = {
  titleTextOne: 'Hambúrguer',
  textInputOne: 'Bovino',
  textInputTwo: 'Frango',
  textInputThree: 'Vegano',
  titleTextTwo: 'Extras',
  price: '1',
  extraOne: 'Ovo',
  extraTwo: 'Queijo'
}

export default MenuItems
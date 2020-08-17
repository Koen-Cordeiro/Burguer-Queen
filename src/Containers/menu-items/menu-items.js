import React from 'react'
import BurguerArea from '../burguer-area/burguer-area'
import './menu-items.scss'

const MenuItems = (props) => (
  <li>
    <h2 className='title'>{props.text}</h2>
    <ul>
      <li className={props.text=== 'Bebidas' ? 'list__line' : 'list'}>
        {props.arr.map((e,index) =>( 
          <div className={props.text=== 'Bebidas' ? 'item__line' : 'item'} key={index} onClick={props.handleClick}>
          <p>R${"\u00a0"}<span key={e.price}>{e.price}</span></p>
          <h3 key={e.type} name='type'>{e.type}</h3>
          {props.text!== 'Bebidas' && <img src={e.img} alt='Ícone do item'/>}
          </div>))}
        {props.burguer && <BurguerArea burguerClick={props.burguerClick} checkbox={props.checkbox} setCheckbox={props.setCheckbox} setValue={props.setValue}/>}
      </li>
    </ul>
  </li>
)

export default MenuItems
import React from 'react'
import BurguerArea from '../burguer-area/burguer-area'
import './menu-items.scss'

const MenuItems = (props) => (
  <li>
    <h2 className='title'>{props.text}</h2>
    {props.arr.map((e,index) =>( 
    <div key={index} onClick={props.handleClick}>
    {props.text!== 'Bebidas' && <img src={e.img} alt='Imagem do item do menu'/>}
    <p>R$<span key={e.price}>{e.price}</span></p>
    <div key={e.type} name='type'>{e.type}</div>
  </div>))}
  {props.burguer && <BurguerArea burguerClick={props.burguerClick} checkbox={props.checkbox} setCheckbox={props.setCheckbox} setValue={props.setValue}/>}
  </li>
)

export default MenuItems
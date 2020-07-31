import React from 'react'
import BurguerArea from '../burguer-area/burguer-area'
const MenuItems = (props) => (
  <li>
  <h1>{props.text}</h1>
      {props.arr.map((e,index) =>( 
    <div key={index} onClick={props.handleClick}>
    <img src={e.img} alt='Imagem do item do menu'/>
    <p>R$<span key={e.price}>{e.price}</span></p>
    <div key={e.type} name='type'>{e.type}</div>
  </div>))}
  {props.burguer && <BurguerArea checkbox={props.checkbox} setCheckbox={props.setCheckbox} setValue={props.setValue}/>}
  </li>
)

export default MenuItems
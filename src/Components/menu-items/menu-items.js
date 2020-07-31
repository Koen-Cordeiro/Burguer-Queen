import React from 'react'

const MenuItems = (props) => (
  <li>
  <h1>{props.text}</h1>
      {props.arr.map((e,index) =>( 
    <div key={index} onClick={(e)=>props.handleClick(e)}>
    <img src={e.img} alt='Imagem do item do menu'/>
    <p>R$<span key={e.price}>{e.price}</span></p>
    <div key={e.type} name='type'>{e.type}</div>
  </div>))}
  </li>
)

export default MenuItems
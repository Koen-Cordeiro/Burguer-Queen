import React from 'react'

const MenuItems = (props) => (
  <li>
  <h1>{props.text}</h1>
      {props.arr.map((e,index) =>( 
    <div key={index} onClick={(e)=>props.handleClick(e)}>
    <div key={e.price}>R${e.price}</div>
    <div key={e.type} name='type'>{e.type}</div>
  </div>))}
  </li>
)

export default MenuItems
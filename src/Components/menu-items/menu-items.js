import React from 'react'

const MenuItems = (props) => (
  <li>
  <h1>{props.text}</h1>
      {props.arr.map((e,index) =>( 
    <div key={index} onClick={(e)=>props.handleClick(e)}>
    <img src={e.img}/>
    <div key={e.price}>{e.price}</div>
    <div key={e.type} name='type'>{e.type}</div>
  </div>))}
  </li>
)

export default MenuItems
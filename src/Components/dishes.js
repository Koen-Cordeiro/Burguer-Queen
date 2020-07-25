import React from 'react'

const MenuItems = (props) => (
  <>
  <h1>{props.text}</h1>
      {props.arr.map((e,index) =>( 
    <div key={index} onClick={props.handleClick}>
    <div key={e.price}>R${e.price}</div>
    <div key={e.type} name='type'>{e.type}</div>
  </div>))}
  </>
)

export default MenuItems
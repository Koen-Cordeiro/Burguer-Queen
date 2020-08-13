import React from 'react'
import './card-board.scss'
import OrderCard from '../order-card/order-card.js'


const CardBoard = ({arr}) => (
  <ul className='cardboard-flex cardboard'>
  {arr.map((e, index) => {
    return (<OrderCard e={e} index={index} key={index + 3000} />)
  })}
</ul>
)

export default CardBoard
import React from 'react'
import './card-board.scss'
import OrderCard from '../../Components/order-card/order-card'


const CardBoard = ({arr}) => (
  <ul className='cardboard-flex'>
  {arr.map((e, index) => {
    return (<OrderCard e={e} index={index} key={index + 3000} />)
  })}
</ul>
)

export default CardBoard
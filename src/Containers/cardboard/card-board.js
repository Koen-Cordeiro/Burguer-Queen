import React from 'react'
import OrderCard from '../../Components/order-card/order-card'


const CardBoard = ({arr}) => (
  <ul>
  {arr.map((e, index) => {
    return (<OrderCard e={e} index={index} key={index + 3000} />)
  })}
</ul>
)

export default CardBoard
import React from 'react'
import './final-order.scss'

const FinalOrder = ({data}) => {
  return (
  <div className='order__list'key={data.key}>
    <div className='order__counter'>
      <span className='order__counter--button red'onClick={(event) => data.func(event, false)}>-</span>
      <div className='order__counter--value' key={data.count + data.type}>
        {data.count}
      </div>
      <span className='order__counter--button'onClick={(event) => data.func(event, true)}>+</span>
    </div>
    <div className='order__menu'>
      <p className='order__menu--main'key={data.type}>{data.type}</p>
      {data.meat && <p>{data.meat}</p>}
      {data.extras && 
      <p className={JSON.stringify(data.extras)}>
        {data.extras.Queijo && <p>Queijo</p>}
        {data.extras.Ovo && <p>Ovo</p>}
      </p>}
    </div>
    <p className='order__menu--price' key={data.price}>{data.price}</p>
  </div>
)}

export default FinalOrder
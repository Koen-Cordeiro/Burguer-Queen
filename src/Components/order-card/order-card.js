import React from 'react'
import './order-card.scss'
import chefhat from '../../img/chefhat.svg'
import clock from '../../img/clock.svg'


const orderCard = ({e,index}) =>{ 
  return (
    <li key={index } className='card-border'>
      <p key={e.orderNumber + index}>N°{e.orderNumber}</p>
      <section key={Math.random() * 30}>
  <p key={e.table+index}>Mesa {e.table}</p>
  <p key={e.waitingTime + index}><img src={chefhat} alt='Quando o pedido foi feito'/>{e.waitingTime}</p>
  <p key={e.clientName+index}>Mesa {e.clientName}</p>
  <p key={e.timeOrdered+index}><img src={clock} alt='Tempo desde que o pedido foi feito'/> {e.timeOrdered}</p>
      </section>
      <ul key={Math.random() * 50}>
        {e.clientOrder.map((item, index) => (
          <li key={index}>
            <span key={item.count + index}>{item.count}</span>
            <span key={item.type + index}>{item.type}</span>
          </li>
        ))}
      </ul>
        <div key={e.finalPrice + index}>
          <p key={'Total' + index}>Total</p>
          <span key={e.finalPrice * index}>{e.finalPrice}</span>
          </div>
  </li>
    
)}

export default orderCard
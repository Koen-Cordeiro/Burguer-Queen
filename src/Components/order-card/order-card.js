import React from 'react'
import firebase from 'firebase'
import './order-card.scss'
import chefhat from '../../img/chefhat.svg'
import clock from '../../img/clock.svg'
import Button from '../button/button'


const orderCard = ({e,index}) =>{ 
  return (
    <li key={index } className='order-card'>
      <div key={`key-div-${index}`} className='order-card-div-top'>
      <p key={e.orderNumber + index} className='order-card-main-text'>N°{e.orderNumber}</p>
      </div>
      <section key={`section-data-${index}`} className='order-card-info'>
  <p key={e.table+index}>Mesa <span key={index + e.table}>{e.table}</span></p>
  <p key={e.clientName+index}>Nome<span key={index + e.clientName}>{e.clientName}</span></p>
  <div className='order-card-time'>
  <p key={e.waitingTime + index}><img src={chefhat} alt='Quando o pedido foi feito'/>{e.waitingTime}</p>
  <p key={e.timeOrdered+index}><img src={clock} alt='Tempo desde que o pedido foi feito'/> {e.timeOrdered}</p>
  </div>
      </section>
      <ul key={`orders-${index}`}>
        {e.clientOrder.map((item, index) => (
          <li key={index}>
            <span key={item.count + index}>{item.count}</span>
            <span key={item.type + index}>{item.type}</span>
          </li>
        ))}
      </ul>
        <div key={e.finalPrice + index} className='order-card-time'>
          <p key={'Total' + index}>Total</p>
          <span key={e.finalPrice * index}>{e.finalPrice}</span>
          </div>
          {e.orderStatus === 'pending'&& window.location.pathname==='/kitchen' && <Button key={`accept-${index}`} text='Aceitar' handleClick={async ()=>  await firebase.firestore().collection('orders').doc(e.id).update({orderStatus: 'doing'})}/>}
          {e.orderStatus === 'doing'&& window.location.pathname==='/kitchen' && <Button key={`finalize-${index}`} text='Finalizar' handleClick={async ()=>  await firebase.firestore().collection('orders').doc(e.id).update({orderStatus: 'ready'})}/>}
          {e.orderStatus === 'delivered'&& window.location.pathname==='/kitchen' && <p key={`delivered-${index}`}>Entregue</p>}
  </li>
    
)}

export default orderCard
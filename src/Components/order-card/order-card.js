import React from 'react'
import firebase from 'firebase'
import './order-card.scss'
import chefhat from '../../img/chefhat.svg'
import clock from '../../img/clock.svg'
import Button from '../button/button'


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
          {e.orderStatus === 'pending'&& window.location.pathname==='/kitchen' && <Button key={Math.random() * 40} text='Aceitar' handleClick={async ()=> {
            console.log(e.id)
            const postCollection = await firebase.firestore().collection('orders')
            postCollection.doc(e.id).update({orderStatus: 'doing'})
          }}/>}
  </li>
    
)}

export default orderCard
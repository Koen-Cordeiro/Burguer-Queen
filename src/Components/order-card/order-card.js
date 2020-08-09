import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import './order-card.scss'
import chefhat from '../../img/chefhat.svg'
import clock from '../../img/clock.svg'
import Button from '../button/button'


const orderCard = ({ e, index }) => {
  return (
    <li key={index} className='order-card'>
      <div key={`key-div-${index}`} className='order-card-div-top'>
        <p key={`order-number-${index}`} className='order-card-main-text'>N°{e.orderNumber}</p>
      </div>
      <section className='order-card-section' key={`order-section-${index}`}>
        <div key={`section-data-${index}`} className='order-card-info'>
          <div className='order-card-div-info' key={`info-div-${index}`}>
            <p kkey={`table-p-${index}`}>Mesa <span key={index + e.table} className='order-card-table-name'> {e.table}</span></p>
            <p key={`client-name-${index}`}>Nome<span key={index + e.clientName} className='order-card-table-name'> {e.clientName}</span></p>
          </div>
          <div className='order-card-time' key={`div-time-${index}`}>
            <p key={`waiting-time-${index}`}><img src={chefhat} alt='Quando o pedido foi feito' />{e.waitingTime} min</p>
            <p kkey={`time-ordered-${index}`}><img src={clock} alt='Tempo desde que o pedido foi feito' /> {e.timeOrdered}</p>
          </div>
        </div>
        <ul key={`orders-${index}`} className='order-card-list'>
          {e.clientOrder.map((item, index) => (
            <li key={index}>
              <span key={item.count + index}>{item.count}</span>
              <span key={item.type + index}>
                <p>{item.type}</p>
                {item.meat && <p>{item.meat}</p>}
                {item.extras && item.extras.Queijo && <p> Queijo</p>}
                {item.extras && item.extras.Ovo && <p> Ovo</p>}
              </span>
            </li>
          ))}
        </ul>
        <div key={e.finalPrice + index} className='order-card-total'>
          <p key={'Total' + index}>Total</p>
          <span key={e.finalPrice * index}>{e.finalPrice}</span>
        </div>

      </section>
      <div className='order-card-div-bottom'>
        {e.orderStatus === 'pending' && window.location.pathname === '/kitchen' && <Button key={`accept-${index}`} type='accept' text='Aceitar' handleClick={async () => await firebase.firestore().collection('orders').doc(e.id).update({ orderStatus: 'doing' })} />}
        {e.orderStatus === 'doing' && window.location.pathname === '/kitchen' && <Button key={`finalize-${index}`} type='accept' text='Finalizar' handleClick={async () => await firebase.firestore().collection('orders').doc(e.id).update({ orderStatus: 'ready' })} />}
        {e.orderStatus === 'ready' && window.location.pathname === '/saloon' && <Button key={`deliver-${index}`} type='accept' text='Entregar' handleClick={async () => await firebase.firestore().collection('orders').doc(e.id).update({ orderStatus: 'delivered', waitingTime:(((new Date().getTime() - e.msOrdered)/1000)/60).toFixed(0) })} />}
        {e.orderStatus === 'delivered' && <p key={`delivered-${index}`} className='order-card__read'>Entregue</p>}
      </div>
    </li>

  )
}

export default orderCard
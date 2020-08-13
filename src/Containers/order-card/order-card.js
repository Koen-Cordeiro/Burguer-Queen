import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import './order-card.scss'
import { Notify } from 'notiflix';
import chefhat from '../../img/chefhat.svg'
import clock from '../../img/clock.svg'
import Button from '../../Components/button/button'


const orderCard = ({ e, index }) => {
  return (
    <li key={index} className='order__card'>
      <div key={`key-div-${index}`} className='order__card--div-top'>
        <p key={e.orderNumber + index} className='order__card--div-top-text'>N°{"\u00a0"}{e.orderNumber}</p>
      </div>
      <section className='order__card--section'>
        <div key={`section-data-${index}`} className='order__card--info'>
          <div className='order__card--info-div'>
            <p key={e.table + index}>Mesa <span key={index + e.table} className='order__card--info-name'> {e.table}</span></p>
            <p key={e.clientName + index}>Nome<span key={index + e.clientName} className='order__card--info-name'> {e.clientName}</span></p>
          </div>
          <div className='order__card--time'>
            <p key={e.timeOrdered + index}><img src={clock} alt='Tempo desde que o pedido foi feito' />{e.timeOrdered}</p>
            <p key={e.waitingTime + index}><img src={chefhat} alt='Quando o pedido foi feito' />{e.waitingTime} min</p>
          </div>
        </div>
        <ul key={`orders-${index}`} className='order__card--list'>
          {e.clientOrder.map((item, index) => (
            <li key={index}>
              <p className='order__card--list-count' key={item.count + index}>{item.count}</p>
              <span key={item.type + index}>
                <p className='order__card--list-meat'>{item.type}</p>
                {item.meat && <p>{item.meat}</p>}
                {item.extras && item.extras.Queijo && <p> Queijo</p>}
                {item.extras && item.extras.Ovo && <p> Ovo</p>}
              </span>
            </li>
          ))}
        </ul>
        <div key={e.finalPrice + index} className='order__card--total'>
          <p key={'Total' + index}>Total</p>
          <span key={e.finalPrice * index}>{e.finalPrice}</span>
        </div>

      </section>
      <div className='order__card--div-bottom'>
        {e.orderStatus === 'pending' && window.location.pathname === '/kitchen' && <Button key={`accept-${index}`} type='accept' text='Aceitar'
          handleClick={async () => {
            Notify.Success('Preparo aceito pela cozinha!')
            await firebase.firestore().collection('orders').doc(e.id).update({ orderStatus: 'doing' })
          }} />}
        {e.orderStatus === 'pending' && window.location.pathname === '/saloon' && <p key={`delivered-${index}`} className='order__card--left'>Pendente</p>}
        {e.orderStatus === 'doing' && window.location.pathname === '/kitchen' && <Button key={`finalize-${index}`} type='accept' text='Finalizar'
          handleClick={async () => {
            Notify.Success('Pedido encaminhado para a entrega!')
            await firebase.firestore().collection('orders').doc(e.id).update({ orderStatus: 'ready' })
          }} />}
        {e.orderStatus === 'ready' && window.location.pathname === '/saloon' && <Button key={`deliver-${index}`} type='accept' text='Entregar'
          handleClick={async () => {
            Notify.Success('Pedido entregue com sucesso!')
            await firebase.firestore().collection('orders').doc(e.id).update({ orderStatus: 'delivered' })
          }} />}
        {e.orderStatus === 'delivered' && <p key={`delivered-${index}`} className='order__card--left'>Entregue</p>}
      </div>
    </li>

  )
}

export default orderCard
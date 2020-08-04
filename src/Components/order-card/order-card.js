import React from 'react'
const orderCard = ({e,index}) =>{ 
  return (
    <li key={index }>
      <p key={e.orderNumber + index}>N°{e.orderNumber}</p>
      <section key={Math.random() * 30}>
  <p key={e.table+index}>Mesa {e.table}</p>
  <p key={e.waitingTime + index}>Eu{e.waitingTime}</p>
  <p key={e.clientName+index}>Mesa {e.clientName}</p>
  <p key={e.timeOrdered+index}>Mesa {e.timeOrdered}</p>
      </section>
  </li>
    
)}

export default orderCard
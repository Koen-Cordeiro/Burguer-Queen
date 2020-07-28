import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import Button from '../../Components/button/button'



const Orders = () => {
  const [inPrepare, setInPrepare] = useState([])
  const [openOrders, setOpenOrders] = useState(true)
  const [readyToDeliver, setReadyToDeliver] = useState(false)
  const [delivered, setDelivered] = useState(false)

  const requestData = () => {
    firebase.firestore().collection('orders').get().then((snap => {
      const getBurguer = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setInPrepare(() => getBurguer);
    })
    )
  }

  useEffect(()=> requestData(), [])

  // changeStatus = (change) =>  {
  //   if(change === 'open'){
  //   setOpenOrders(!openOrders)
  //   setReadyToDeliver(!readyToDeliver)
  //   setDelivered(!delivered)
  // } else if(change ==='ready') {
  //   setOpenOrders(!openOrders)
  //   setReadyToDeliver(!readyToDeliver)
  //   setDelivered(!delivered)
  // } else {
  //   setOpenOrders(!openOrders)
  //   setReadyToDeliver(!readyToDeliver)
  //   setDelivered(!delivered)
  // }
  // }

  return (
    <>
      <h1>Oie eu sou a área de pedidos</h1>

      <Button text='Abertos' handleClick={()=> setOpenOrders(!openOrders)}/>
      <Button text='Prontos' handleClick={()=> setReadyToDeliver(!readyToDeliver)}/>
      <Button text='Entregues'handleClick={()=> setDelivered(!delivered)}/>

      {openOrders && inPrepare.map((e,index) => (
        <ul key={index}>
          <li key={e.orderNumber + index}>{e.orderNumber} </li>
          <li key={e.orderStatus + index}>{e.orderStatus} </li>
          <li key={e.table + index}>{e.table} </li>
          <li>
            {e.clientOrder.map((e, index) => (
              <div  key={index + e.type}>
              <div key={e.type + index}>{e.type}</div>
              <div key={e.count + e.type}>{e.count}</div>
              <div key={e.price + index}>{e.price}</div>
              </div >)
            )}
          </li>
        </ul>)
      )}
      {readyToDeliver && inPrepare.map((e,index) => (
        <ul key={index}>
          <li key={e.orderNumber + index}>{e.orderNumber} </li>
          <li key={e.orderStatus + index}>{e.orderStatus} </li>
          <li key={e.table + index}>{e.table} </li>
          <li>
            {e.clientOrder.map((e, index) => (
              <div  key={index + e.type}>
              <div key={e.type + index}>{e.type}</div>
              <div key={e.count + e.type}>{e.count}</div>
              <div key={e.price + index}>{e.price}</div>
              </div >)
            )}
          </li>
        </ul>)
      )}
      {delivered && inPrepare.map((e,index) => (
        <ul key={index}>
          <li key={e.orderNumber + index}>{e.orderNumber} </li>
          <li key={e.orderStatus + index}>{e.orderStatus} </li>
          <li key={e.table + index}>{e.table} </li>
          <li>
            {e.clientOrder.map((e, index) => (
              <div  key={index + e.type}>
              <div key={e.type + index}>{e.type}</div>
              <div key={e.count + e.type}>{e.count}</div>
              <div key={e.price + index}>{e.price}</div>
              </div >)
            )}
          </li>
        </ul>)
      )}
    </>
  );
};

export default Orders
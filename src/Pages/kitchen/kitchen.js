import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import CardBoard from '../../Containers/cardboard/card-board'
import Button from '../../Components/button/button'
const Kitchen = () => {
  const [open, setOpen] = useState([])
  const [status, setStatus] = useState('pending')
  const [date, setDate] = useState(new Date().getTime())
  const [delivered, setDelivered] = useState([])

  setInterval(() => setDate(new Date().getTime()), 60000)

  useEffect(() => {
    firebase.firestore().collection('orders').onSnapshot((snap => {
      const getData = snap.docs.map((doc) => ({
        id: doc.id,
        waitingTime: Number((((new Date().getTime() - doc.data().msOrdered) / 1000) / 60).toFixed(0)),
        ...doc.data()
      }))
      setDelivered(getData.filter(e=> e.orderStatus === 'delivered'))
      setOpen(getData)
    }))
  }, [])

  useEffect(()=> setOpen(o => o.map(e => ({...e, waitingTime: Number((((new Date().getTime() - e.msOrdered) / 1000) / 60).toFixed(0)) }))) , [date])

  return (
    <>
      <Button text='Sair' handleClick={() => firebase.auth().signOut()} />
      <Button text='Abertos' handleClick={() => setStatus('pending')} />
      <Button text='Prontos' handleClick={() => setStatus('doing')} />
      <Button text='Entregues' handleClick={() => setStatus('')} />
      {status.length>0 && <CardBoard arr={open.filter(e=> e.orderStatus === status)} />}
      {status.length===0 && <CardBoard arr={delivered} />}
    </>
  );
};

export default Kitchen
import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import CardBoard from '../../Containers/cardboard/card-board'
import Button from '../../Components/button/button'
const Kitchen = () => {
  const [open, setOpen] = useState([])
  const [pending, setPending] = useState([])
  const [doing, setDoing] = useState([])
  const [delivered, setDelivered] = useState([])
  const [date, setDate] = useState(new Date().getTime())

  setInterval(() => setDate(new Date().getTime()), 60000)

  useEffect(() => {
    firebase.firestore().collection('orders').onSnapshot((snap => {
      const getBurguer = snap.docs.map((doc) => ({
        id: doc.id,
        waitingTime: Number((((new Date().getTime() - doc.data().msOrdered) / 1000) / 60).toFixed(0)),
        ...doc.data()
      }))
      
      setOpen(getBurguer)
    }))
  }, [])

  // useEffect(()=> setInterval(() => setDate(new Date().getTime()), 60000), [open])
  useEffect(()=> setOpen(o => o.map(e => ({...e, waitingTime: Number((((new Date().getTime() - e.msOrdered) / 1000) / 60).toFixed(0)) }))) , [date])

  return (
    <>
      <Button text='Sair' handleClick={() => firebase.auth().signOut()} />
      <Button text='Abertos' handleClick={() => setOpen(pending)} />
      <Button text='Prontos' handleClick={() => setOpen(doing)} />
      <Button text='Entregues' handleClick={() => setOpen(delivered)} />
      <CardBoard arr={open} />
    </>
  );
};

export default Kitchen
import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import OrderCard from '../../Components/order-card/order-card'

const Kitchen = () => {
  const [open, setOpen] = useState([])
  const [date, setDate] = useState(new Date().getTime())

  setInterval(() => setDate(new Date().getTime()), 60000)

  useEffect(() => {
    firebase.firestore().collection('orders').onSnapshot((snap => {
      const getBurguer = snap.docs.map((doc) => ({
        id: doc.id,
        waitingTime: Number((((date - doc.data().msOrdered) / 1000) / 60).toFixed(0)),
        ...doc.data()
      }))
      setOpen(() => getBurguer);
    }))
  }, [date])
  return (
    <>
      <h1>Bem vindo rei do masterchef</h1>
      <button onClick={() => firebase.auth().signOut()}> Sair</button>
      <ul>
        {open.map((e, index) => {
          return (<OrderCard e={e} index={index} key={index + 3000} />)
        })}

      </ul>
    </>
  );
};

export default Kitchen
import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import CardBoard from '../../Containers/cardboard/card-board'
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
      <button onClick={() => firebase.auth().signOut()}> Sair</button>
      <CardBoard arr={open}/>
    </>
  );
};

export default Kitchen
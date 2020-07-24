import React, { useState, useEffect } from 'react'
import Button from '../../Components/button'
import MenuItems from '../../Components/dishes'
import firebase from 'firebase'

const Saloon = () => {
  const [breakfast, setBreakfast] = useState([])
  const [snacks, setSnacks] = useState([])
  const [drinks, setDrinks] = useState([])
  const [burguers, setBurguers] = useState([])
  const [breakfastClick, setBreakfastClick] = useState(false)
  const [alldayClick, setAllDayClick] = useState(false)

  const requestData = (document) => {
    firebase.firestore().collection('menu').doc(document.menu).collection(document.type).get().then((snap => {
      const getBurguer = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      document.set(() => getBurguer);
    })
    )
  }

  useEffect(() => requestData({ menu: 'Breakfast', type: 'pratos', set: setBreakfast }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'acompanhamentos', set: setSnacks }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'bebidas', set: setDrinks }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'hamburgueres', set: setBurguers }), [])

  return (
    <main>
      <h1>Bem vindo senhor das mesas</h1>
      <button onClick={() => firebase.auth().signOut()}> Sair</button>

      <Button text='Café da manhã' handleClick={() => setBreakfastClick(!breakfastClick)} />
      <Button text='Resto do dia' handleClick={() => setAllDayClick(!alldayClick)} />

      <ul>
        <li>
          {breakfastClick && <MenuItems arr={breakfast} />}
        </li>
        <li>
          {alldayClick && <MenuItems text='Acompanhamentos' arr={snacks} />}
        </li>
        <li>
          {alldayClick && <MenuItems text='Bebidas' arr={drinks} />}
        </li>
        <li>
          {alldayClick && <MenuItems text='Hamburgueres' arr={burguers} />}
        </li>
      </ul>
    </main>
  );
};

export default Saloon
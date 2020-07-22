import React, { useState, useEffect } from 'react'
import Button from '../../Components/button'
import MenuItems from '../../Components/acompanhamentos'
import firebase from 'firebase'

const Saloon = () => {
  const [breakfast, setBreakfast] = useState([])
  const [snacks, setSnacks] = useState([])
  const [drinks, setDrinks] = useState([])
  const [burguers, setBurguers] = useState([])
  const [breakfastClick, setBreakfastClick] = useState(false)
  const [alldayClick, setAllDayClick] = useState(false)

  useEffect(() => {
    firebase.firestore().collection('menu').doc('Breakfast').collection('pratos').get().then((snap => {
      const getMenu = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setBreakfast(() => getMenu);
    })
    )
  }, [])
  useEffect(() => {
    firebase.firestore().collection('menu').doc('All-day').collection('acompanhamentos').get().then((snap => {
      const getSnacks = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setSnacks(() => getSnacks);
    })
    )
  }, [])
  useEffect(() => {
    firebase.firestore().collection('menu').doc('All-day').collection('bebidas').get().then((snap => {
      const getDrinks = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setDrinks(() => getDrinks);
    })
    )
  }, [])
  useEffect(() => {
    firebase.firestore().collection('menu').doc('All-day').collection('hamburgueres').get().then((snap => {
      const getBurguer = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setBurguers(() => getBurguer);
    })
    )
  }, [])

  return (
    <main>
      <h1>Bem vindo senhor das mesas</h1>
      <button onClick={() => firebase.auth().signOut()}> Sair</button>

        <Button text='Café da manhã' handleClick={() => setBreakfastClick(!breakfastClick)}/>
        <Button text='Resto do dia' handleClick={() => setAllDayClick(!alldayClick)}/>
    
  <ul>
    {breakfastClick && <MenuItems arr={breakfast}/>}
  <li>
    {alldayClick && <MenuItems text='Acompanhamentos' arr={snacks}/>}
  </li>
  <li>
    {alldayClick && <MenuItems text='Bebidas' arr={drinks}/>}
  </li>
  <li>
    {alldayClick && <MenuItems text='Hamburgueres' arr={burguers}/>}
  </li>
  </ul>
    </main>
  );
};

export default Saloon
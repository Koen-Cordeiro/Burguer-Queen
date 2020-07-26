import React, { useState, useEffect } from 'react'
import Button from '../../Components/button'
import MenuItems from '../../Components/dishes'
import firebase from 'firebase'

const Saloon = () => {
  const [breakfast, setBreakfast] = useState([])
  const [menu, setMenu] = useState([])
  const [snacks, setSnacks] = useState([])
  const [drinks, setDrinks] = useState([])
  const [burguers, setBurguers] = useState([])
  const [breakfastClick, setBreakfastClick] = useState(false)
  const [alldayClick, setAllDayClick] = useState(false)
  const [order, setOrder] = useState([])
  const [price, setPrice] = useState({})

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
  useEffect(() => {
    let takeType = order.map((item) => item.type);
    let countTypes = takeType.reduce(function (allTypes, atualType) {
      if (atualType in allTypes) {
        allTypes[atualType]++;
      } else {
        allTypes[atualType] = 1;
      }
      return allTypes;
    }, {})
    const menu = Object.entries(countTypes)
    if (menu.length > 0) {
      setMenu(menu.map(e => ({ type: e[0], count: e[1], price: price[e[0]] })))
    }
  }, [order])
  useEffect(() => {
    const menu = Array.of(breakfast, burguers, drinks, snacks)
    setPrice(menu.flat().reduce((obj, item) => ({ ...obj, [item.type]: item.price }), {}))
  }, [breakfast, snacks, drinks, burguers])
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
      {menu.map((e, index) => (
        <div key={index}>
          <h2 key={e.type}>{e.type}</h2>
          <h2 key={e.price}>{e.price}</h2>
          <h2 key={e.count + e.type}>{e.count}</h2>
        </div>
      ))}
      <ul>
        <li>
          {breakfastClick && <MenuItems arr={breakfast} handleClick={(event) => {
            const arr = Array.from(event.currentTarget.children)
            setOrder([...order, { type: arr[1].innerText }])

          }} />}
        </li>
        <li>
          {alldayClick && <MenuItems text='Acompanhamentos' arr={snacks} handleClick={(event) => {
            const arr = Array.from(event.currentTarget.children)
            setOrder([...order, { type: arr[1].innerText }])

          }} />}
        </li>
        <li>
          {alldayClick && <MenuItems text='Bebidas' arr={drinks} handleClick={(event) => {
            const arr = Array.from(event.currentTarget.children)
            setOrder([...order, { type: arr[1].innerText }])

          }} />}
        </li>
        <li>
          {alldayClick && <MenuItems text='Hamburgueres' arr={burguers} handleClick={(event) => {
            const arr = Array.from(event.currentTarget.children)
            setOrder([...order, { type: arr[1].innerText }])

          }} />}
        </li>
      </ul>
    </main>
  );
};

export default Saloon
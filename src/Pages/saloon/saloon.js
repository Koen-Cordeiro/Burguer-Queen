import React, { useState, useEffect } from 'react'
import Button from '../../Components/button'
import Input from '../../Components/input'
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
  const [orderNumber, setOrderNumber] = useState()

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

  const addOrder = (event) => {
    const arr = Array.from(event.currentTarget.children)
    setOrder([...order, arr[1].innerText])

  }
  useEffect(() => setOrderNumber((Math.random() * 100000).toFixed(0)), [])
  useEffect(() => {
    let countTypes = order.reduce(function (allTypes, atualType) {
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
    <div className='menu-row-reverse'>
      <form className='log-reg-flex'>
        <h1>Pedido {orderNumber}</h1>
        <Input type='text' text='Nome do Cliente' />
        <Input type='number' text='Mesa' />
        <div>
          {menu.map((e, index) => (
            <div key={index}>
              <h2 key={e.type}>{e.type}</h2>
              <h2 key={e.price}>{e.price}</h2>
              <h2 key={e.count + e.type}>{e.count}</h2>
            </div>
          ))}
        </div>

      </form>
      <section >

        <h1>Bem vindo senhor das mesas</h1>
        <Button handleClick={() => firebase.auth().signOut()} text='Sair' />

        <Button text='Café da manhã' handleClick={() => {
          setBreakfastClick(!breakfastClick)
          setAllDayClick(false)
        }} />
        <Button text='Resto do dia' handleClick={() => {
          setAllDayClick(!alldayClick)
          setBreakfastClick(false)
        }} />

        <ul>
          {breakfastClick && <MenuItems arr={breakfast} handleClick={addOrder} />}
          {alldayClick && <MenuItems text='Acompanhamentos' arr={snacks} handleClick={addOrder} />}
          {alldayClick && <MenuItems text='Bebidas' arr={drinks} handleClick={addOrder} />}
          {alldayClick && <MenuItems text='Hamburgueres' arr={burguers} handleClick={addOrder} />}
        </ul>
      </section>
    </div>
  );
};

export default Saloon
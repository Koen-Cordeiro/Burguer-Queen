import React, { useState, useEffect } from 'react'
import Button from '../../Components/button/button'
import Input from '../../Components/input/input'
import MenuItems from '../../Components/menu-items/menu-items'
import firebase from 'firebase'

const Menu = () => {
  const [breakfast, setBreakfast] = useState([])
  const [clientOrder, setClientOrder] = useState([])
  const [snacks, setSnacks] = useState([])
  const [drinks, setDrinks] = useState([])
  const [burguers, setBurguers] = useState([])
  const [menu, setMenu] = useState(false)
  const [order, setOrder] = useState([])
  const [orderNumber, setOrderNumber] = useState()
  const [table, setTable] = useState('')
  const [clientName, setClientName] = useState('')
  const [finalPrice, setFinalPrice] = useState(0)

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
    setOrder([...order, { type: arr[2].innerText, price: Number(arr[1].children[0].textContent) }])
  }

  const sendOrder = (post) => {
    firebase.firestore().collection('orders').doc(post.orderNumber).set(post)
  }

  const reloadData = (event, greater) => {
    const element = event.currentTarget.parentElement.secondChild.textContent
    const index = order.findIndex(x => x.type === element)
    greater ? order.push(order[index]) : order.pop(order[index])
    setOrder([...order])
  }

  useEffect(() => setOrderNumber((Math.random() * 100000).toFixed(0)), [])
  useEffect(() => {
    setClientOrder(order.reduce((allTypes, atualType) => {
      const index = allTypes.findIndex(x => x.type === atualType.type)
      if (index !== -1) {
        allTypes[index].count++
      } else {
        allTypes.push({ type: atualType.type, price: atualType.price, count: 1})
      }
      return allTypes;
    }, []))
  }, [order])
  useEffect(() => setFinalPrice(clientOrder.reduce((allTypes, atualType) => atualType.price * atualType.count + allTypes, 0)), [clientOrder])
  useEffect(() => requestData({ menu: 'Breakfast', type: 'pratos', set: setBreakfast }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'acompanhamentos', set: setSnacks }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'bebidas', set: setDrinks }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'hamburgueres', set: setBurguers }), [])

  return (
    <div className='menu-row-reverse'>
      <form className='log-reg-flex'>
        <h1>Pedido {orderNumber}</h1>
        <Input type='text' text='Nome do Cliente' handleChange={(e) => setClientName(e.currentTarget.value)} />
        <Input type='number' text='Mesa' handleChange={(e) => setTable(e.currentTarget.value)} />
        <div>
          {clientOrder.map((e, index) => (
            <div key={index}>
              <h2 key={e.type}>{e.type}</h2>
              <h2 key={e.price}>{e.price}</h2>
              <h3 onClick={(event) => reloadData(event, true)}>+</h3>
              <h2 key={e.count + e.type}>{e.count}</h2>
              <h3 onClick={(event) => reloadData(event, false)}>-</h3>
            </div>
          ))}
          <h2>R${finalPrice}</h2>

          <Button text='Enviar pedido' handleClick={(event) => {
            event.preventDefault()
            const orderNumberValue = `${clientName}-${table}-${orderNumber}`
            sendOrder({ orderNumber: orderNumberValue, finalPrice, clientName, table, clientOrder, orderStatus: 'pending', workerName: firebase.auth().currentUser.displayName })
          }} />
        </div>

      </form>
      <section >

        <h1>Bem vindo senhor das mesas</h1>
        <Button handleClick={() => firebase.auth().signOut()} text='Sair' />

        <Button text='Café da manhã' handleClick={() => {
          setMenu(!menu)
        }} />
        <Button text='Resto do dia' handleClick={() => {
          setMenu(!menu)
        }} />

        <ul>
          {menu && <MenuItems arr={breakfast} handleClick={addOrder} />}
          {!menu && <MenuItems text='Acompanhamentos' arr={snacks} handleClick={addOrder} />}
          {!menu && <MenuItems text='Bebidas' arr={drinks} handleClick={addOrder} />}
          {!menu && <MenuItems text='Hamburgueres' arr={burguers} handleClick={addOrder} />}
        </ul>
      </section>
    </div>
  );
};

export default Menu
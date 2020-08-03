import React, { useState, useEffect } from 'react'
import Button from '../../Components/button/button'
import Input from '../../Components/input/input'
import MenuItems from '../../Components/menu-items/menu-items'
import FinalOrder from '../../Components/final-order/final-order'
import Nav from '../../Components/nav/nav'
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
  const [burguerValue, setBurguerValue] = useState(false)
  const [burguerMeat, setBurguerMeat] = useState('')
  const [extras, setExtras] = useState({ Ovo: false, Queijo: false })
  const [burguerType, setBurguerType] = useState({})

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

  const addBurguer = () => {
    setOrder([...order, { type: burguerType.type, price: burguerType.price, extras, meat: burguerMeat }])
  }

  const addOrder = (event) => {
    const arr = Array.from(event.currentTarget.children)
    setOrder([...order, { type: arr[2].innerText, price: Number(arr[1].children[0].textContent) }])
  }

  const sendOrder = (post) => {
    firebase.firestore().collection('orders').doc(post.orderNumber).set(post)
  }

  const reloadData = (event, greater) => {
    const element = event.currentTarget.parentElement.children[0].textContent
    const meat = event.currentTarget.parentElement.children[2].textContent
    const extrasDOM = event.currentTarget.parentElement.children[3].className
    const indexMeat = order.findIndex(x => x.meat === meat && JSON.stringify(x.extras) === extrasDOM)
    if (indexMeat !== -1) {
      greater ? order.push(order[indexMeat]) : order.splice(indexMeat, 1)
      setOrder([...order])
    } else {
      const index = order.findIndex(x => x.type === element)
      greater ? order.push(order[index]) : order.pop(order[index])
      setOrder([...order])
    }
  }

  useEffect(() => setOrderNumber((Math.random() * 100000).toFixed(0)), [])
  // useEffect(() => console.log(clientOrder), [clientOrder])
  useEffect(() => {
    setClientOrder(order.reduce((allTypes, atualType) => {
      const index = allTypes.findIndex(x => x.type === atualType.type)
      const indexMeat = allTypes.findIndex(x => x.meat === atualType.meat && JSON.stringify(x.extras) === JSON.stringify(atualType.extras))
      if (atualType.extras && indexMeat === -1) {
        allTypes.push({ type: atualType.type, price: atualType.price, count: 1, extras: atualType.extras, meat: atualType.meat })
      } else if ( atualType.extras && indexMeat !== -1) {
        allTypes[indexMeat].count++
      }
      else if (index !== -1) {
        allTypes[index].count++
      } else {
        allTypes.push({ type: atualType.type, price: atualType.price, count: 1 })
      }
      return allTypes;
    }, []))
  }, [order])
  useEffect(() => setFinalPrice(clientOrder.reduce((allTypes, atualType) => {
    if(atualType.extras) {
      if (atualType.extras.Ovo && atualType.extras.Queijo) atualType.price += 2
      else if (atualType.extras.Ovo || atualType.extras.Queijo) atualType.price++
    }
    return atualType.price * atualType.count + allTypes
  }, 0)), [clientOrder])
  useEffect(() => requestData({ menu: 'Breakfast', type: 'pratos', set: setBreakfast }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'acompanhamentos', set: setSnacks }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'bebidas', set: setDrinks }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'hamburgueres', set: setBurguers }), [])

  const arrMenu = [
    {menuText:'Dia', menuClass:'menu', menuClick:() => {setMenu(!menu)}},
    {menuText:'Café', menuClass:'menu', menuClick:() => {setMenu(!menu)}},
  ];

  return (
    <>
      <section className='menu'>
        <Nav use='menu' arr={arrMenu}/>
        <div className='center'>
          <ul>
            {menu && <MenuItems arr={breakfast} handleClick={(e) => addOrder(e)} />}
            {!menu && <MenuItems text='Hambúrgueres'
              arr={burguers}
              burguer={burguerValue}
              setValue={setBurguerMeat}
              setCheckbox={setExtras}
              burguerClick={addBurguer}
              checkbox={extras}
              handleClick={(e) => {
                setBurguerType({ type: e.currentTarget.children[2].textContent, price: Number(e.currentTarget.children[1].children[0].textContent) })
                setBurguerValue(!burguerValue)
              }} />}
            {!menu && <MenuItems text='Acompanhamentos' arr={snacks} handleClick={(e) => addOrder(e)} />}
            {!menu && <MenuItems text='Bebidas' arr={drinks} handleClick={(e) => addOrder(e)} />} 
          </ul>
        </div>
      </section>
      <section>
        <header>
          <h1>Puxar o nome do atendente</h1>
          <Button handleClick={() => firebase.auth().signOut()} text='Sair' />
        </header>
        <form className='log-reg-flex'>
          <h1>Pedido {orderNumber}</h1>
          <Input type='text' text='Nome do Cliente' handleChange={(e) => setClientName(e.currentTarget.value)} />
          <Input type='number' text='Mesa' handleChange={(e) => setTable(e.currentTarget.value)} />
          <fieldset>
            {clientOrder.map((e, index) => <FinalOrder key={index + 1000} data={{
              price: e.price,
              type: e.type,
              count: e.count,
              key: index,
              meat: e.meat,
              extras: e.extras,
              func: reloadData
            }} />)}
            <h2>R${finalPrice}</h2>

            <Button text='Cancelar Pedido' handleClick={(event) => {
              event.preventDefault()
              setOrder([])
              }} />
            <Button text='Enviar pedido' handleClick={(event) => {
              event.preventDefault()
              const orderNumberValue = `${clientName}-${table}-${orderNumber}`
              sendOrder({ orderNumber: orderNumberValue, finalPrice, clientName, table, clientOrder, orderStatus: 'pending', workerName: firebase.auth().currentUser.displayName })
            }} />
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default Menu
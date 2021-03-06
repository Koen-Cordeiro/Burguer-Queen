import React, { useState, useEffect } from 'react'
import { Report, Notify, Confirm } from 'notiflix'
import Button from '../../Components/button/button'
import Input from '../../Components/input/input'
import MenuItems from '../menu-items/menu-items'
import FinalOrder from '../../Components/final-order/final-order'
import Nav from '../../Components/nav/nav'
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const Menu = () => {
  const [breakfast, setBreakfast] = useState([])
  const [coffee, setCoffee] = useState([])
  const [clientOrder, setClientOrder] = useState([])
  const [snacks, setSnacks] = useState([])
  const [drinks, setDrinks] = useState([])
  const [burguers, setBurguers] = useState([])
  const [menu, setMenu] = useState(false)
  const [order, setOrder] = useState([])
  const [orderNumber, setOrderNumber] = useState(0)
  const [table, setTable] = useState('')
  const [clientName, setClientName] = useState('')
  const [finalPrice, setFinalPrice] = useState(0)
  const [burguerValue, setBurguerValue] = useState(false)
  const [burguerMeat, setBurguerMeat] = useState('Bovino')
  const [extras, setExtras] = useState({ Ovo: false, Queijo: false })
  const [burguerType, setBurguerType] = useState({})
  let [updateOrderNumber, setUpdateOrderNumber] = useState(0)

  
  useEffect(() => setOrderNumber(Number((Math.random() * 100000).toFixed(0))), [updateOrderNumber])
  
  useEffect(() => setFinalPrice(clientOrder.reduce((allTypes, atualType) => {
    let extras = 0
    if (atualType.extras) {
      if (atualType.extras.Ovo && atualType.extras.Queijo) extras += 2
      else if (atualType.extras.Ovo || atualType.extras.Queijo) extras++
    }
    extras+= atualType.price
    return extras * atualType.count + allTypes 
  }, 0)), [clientOrder])
  useEffect(() => requestData({ menu: 'Breakfast', type: 'pratos', set: setBreakfast }), [])
  useEffect(() => requestData({ menu: 'Breakfast', type: 'cafe', set: setCoffee }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'acompanhamentos', set: setSnacks }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'bebidas', set: setDrinks }), [])
  useEffect(() => requestData({ menu: 'All-day', type: 'hamburgueres', set: setBurguers }), [])
  
  useEffect(() => {
    setClientOrder(order.reduce((allTypes, atualType) => {
      atualType.extras ? updateBurguerValue(allTypes, atualType) : updateOrderValue(allTypes, atualType)
      return allTypes;
    }, []))
  }, [order])

  const updateOrderValue = (allTypes, atualType) => {
    const index = allTypes.findIndex(e => e.type === atualType.type)
    if (index !== -1) {
      return allTypes[index].count++
    } else {
      return allTypes.push({
        type: atualType.type,
        price: atualType.price,
        count: 1
      })
    }
  }

  const updateBurguerValue = (allTypes, atualType) => {
    const indexMeat = allTypes.findIndex(e => e.meat === atualType.meat &&
      JSON.stringify(e.extras) === JSON.stringify(atualType.extras) &&
      e.type === atualType.type)
    if (indexMeat === -1) {
      atualType.count = 1
      return allTypes.push(atualType)
    } else if (indexMeat !== -1) {
      return allTypes[indexMeat].count++
    }
  }

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
    setOrder([
      ...order,
      {
        type: burguerType.type,
        price: burguerType.price,
        extras,
        meat: burguerMeat,
        count: 0
      }])
    setExtras({ Ovo: false, Queijo: false })
    setBurguerMeat('Bovino')
    setBurguerValue(false)
  }

  const addOrder = (event) => {
    const arr = Array.from(event.currentTarget.children)
    setOrder([...order, { type: arr[1].innerText, price: Number(arr[0].children[0].textContent) }])
  }

  const sendOrder = (post) => {
    firebase.firestore().collection('orders').doc(post.orderValueNumber).set(post)
  }

  const reloadData = (event, greater) => {
    const element = event.currentTarget.parentElement.nextSibling.children[0].textContent

    if (/Hambúrguer/.test(element)) {
      const type = event.currentTarget.parentElement.nextSibling.children[0].textContent
      const meat = event.currentTarget.parentElement.nextSibling.children[1].textContent
      const extrasDOM = event.currentTarget.parentElement.classList[1]
      const indexMeat = order.findIndex(e => e.meat === meat && JSON.stringify(e.extras) === extrasDOM && e.type === type)
      if (indexMeat !== -1) {
        greater ? order.push(order[indexMeat]) : order.splice(indexMeat, 1)
        setOrder([...order])
      }
    }
    else {
      const index = order.findIndex(e => e.type === element)
      greater ? order.push(order[index]) : order.splice(index, 1)
      setOrder([...order])
    }
  }

  
  

  const arrMenu = [
    { menuText: 'Dia', menuClass: menu ? 'menu active' : 'menu', menuClick: () => { setMenu(!menu) } },
    { menuText: 'Café', menuClass: menu ? 'menu' : 'menu active', menuClick: () => { setMenu(!menu) } },
  ];

  return (
    <>
      <section className='menu'>
        <Nav use='menu' arr={arrMenu} />
        <ul className='menu__center'>
          {menu && <MenuItems text='Cafés' arr={coffee} handleClick={(e) => addOrder(e)} />}
          {menu && <MenuItems text='Lanche e Suco' arr={breakfast} handleClick={(e) => addOrder(e)} />}
          {!menu && <MenuItems text='Hambúrgueres'
            arr={burguers}
            burguer={burguerValue}
            setValue={setBurguerMeat}
            setCheckbox={setExtras}
            burguerClick={addBurguer}
            checkbox={extras}
            handleClick={(e) => {
              setBurguerType({ type: e.currentTarget.children[1].textContent, price: Number(e.currentTarget.children[0].children[0].textContent) })
              setBurguerValue(!burguerValue)
            }} />}
          {!menu && <MenuItems text='Acompanhamentos' arr={snacks} handleClick={(e) => addOrder(e)} />}
          {!menu && <MenuItems text='Bebidas' arr={drinks} handleClick={(e) => addOrder(e)} />}
        </ul>
      </section>
      <section className='order'>
        <header className='logged'>
          <h1>{firebase.auth().currentUser.displayName}</h1>
          <Button type='logout icon-door' handleClick={() => firebase.auth().signOut()} text='Sair' />
        </header>
        <form id='orderForm' className='order__form'>
          <div className='order__number'>
            <h1>Caso</h1>
            <h3>Nº{"\u00a0"}{orderNumber}</h3>
          </div>
          <div className='order__info'>
            <Input use='order' specific='name' type='text' label='Nome' value={clientName} handleChange={(e) => setClientName(e.currentTarget.value)} />
            <Input use='order' specific='table' type='number' label='Mesa' value={table} handleChange={(e) => setTable(e.currentTarget.value)} />
          </div>
          <fieldset className='order__items'>
            {clientOrder.map((e, index) => <FinalOrder key={index + 1000} data={{
              price: e.price,
              type: e.type,
              count: e.count,
              key: index,
              meat: e.meat,
              extras: e.extras,
              func: reloadData
            }} />)}
          </fieldset>
          <div className='order__total'>
            <h2>Total</h2>
            <h3>R${"\u00a0"}{finalPrice}</h3>
          </div>
          <div className='order__buttons'>
            <Button type='order--cancel' text='Cancelar' handleClick={(event) => {
              event.preventDefault()
              Confirm.Show(
                'Cancelamento do pedido',
                'Você deseja cancelar o pedido??',
                'Sim',
                'Não',
                function () {
                  setClientName('')
                  setTable('')
                  setOrder([])
                  Notify.Success('Pedido cancelado com sucesso!')
                },
                function () {
                  Notify.Failure('Ação cancelada')
                });
            }} />
            <Button type='order--confirm' text='Enviar' handleClick={(event) => {
              event.preventDefault()
              if (clientName.length > 0 && table.length > 0 && clientOrder.length > 0) {
                const orderValueNumber = `${clientName}-${table}-${orderNumber}`
                sendOrder({
                  orderNumber,
                  orderValueNumber,
                  finalPrice,
                  clientName,
                  table,
                  clientOrder,
                  orderStatus: 'pending',
                  timeOrdered: `${new Date().getHours()}h${new Date().getMinutes()}`,
                  msOrdered: new Date().getTime(),
                  workerName: firebase.auth().currentUser.displayName
                })
                Notify.Success('Pedido enviado')
                setClientName('')
                setTable('')
                setOrder([])
                setUpdateOrderNumber(updateOrderNumber += 1)
              } else {
                Report.Failure('Pedido incompleto',
                  'Para enviar um pedido, favor preencher todas as informações corretamente.',
                  'OK');
              }
            }} />
          </div>
        </form>
      </section>
    </>
  );
};

export default Menu
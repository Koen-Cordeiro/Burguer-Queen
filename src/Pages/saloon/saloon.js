import React, { useState } from 'react'
import Menu from '../../Containers/menu/menu'
import Orders from '../../Containers/orders/orders'
import Nav from '../../Components/nav/nav'
import Logo from '../../Components/logo/logo'
import '../../scss/styles/saloon.scss'

const Saloon = () => {
  const [menu, setMenu] = useState(true)
  const [order, setOrder] = useState(false)

  const arrMenu = [
    {menuText:'Menu', menuClass:menu ? 'sidebar active icon-menu' : 'sidebar icon-menu', menuClick:() => {
      setOrder(false)
      setMenu(true)}},
    {menuText:'Pedidos', menuClass:order ? 'sidebar active icon-order' : 'sidebar icon-order', menuClick:() => {
      setOrder(true)
      setMenu(false)}},
  ];

  return (
    <div className='frame'>
      <aside className='sidebar'>
        <Logo use='sidebar'/>
        <Nav use='sidebar' arr={arrMenu}/>
        <div className='copyright__land'>
          <p className='copyright__saloon'>© Caroline Pinheiro e Tamires Cordeiro</p>
        </div>
      </aside>
      <div className='saloon'>
        {menu && <Menu />}
        {order && <Orders />}
      </div>
      <footer className='copyright__portrait'>
        © Caroline Pinheiro e Tamires Cordeiro
      </footer>
    </div>
  );
};

export default Saloon
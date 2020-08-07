import React, { useState } from 'react'
import Menu from './menu'
import Orders from './orders'
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
      </aside>
      <div className='cardapio'>
        {menu && <Menu />}
        {order && <Orders />}
      </div>
    </div>
  );
};

export default Saloon
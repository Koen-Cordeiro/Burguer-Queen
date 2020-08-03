import React, { useState } from 'react'
import Menu from './menu'
import Orders from './orders'
import Nav from '../../Components/nav/nav'
import Logo from '../../Components/logo/logo'
import '../../scss/styles/saloon.scss'

const Saloon = () => {
  const [menu, setMenu] = useState(true)
  const [menuOrder, setMenuOrder] = useState(false)

  const arrMenu = [
    {menuText:'Menu', menuClass:'sidebar', menuClick:() => {
      setMenuOrder(false)
      setMenu(true)}},
    {menuText:'Pedidos', menuClass:'sidebar', menuClick:() => {
      setMenuOrder(true)
      setMenu(false)}},
  ];

  return (
    <div className='frame'>
      <aside className='sidebar'>
        <Logo use='sidebar'/>
        <Nav use='sidebar' arr={arrMenu}/>
      </aside>
      {menu && <Menu />}
      {menuOrder && <Orders />}
    </div>
  );
};

export default Saloon
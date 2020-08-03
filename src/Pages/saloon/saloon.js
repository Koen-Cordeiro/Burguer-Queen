import React, { useState } from 'react'
import Menu from './menu'
import Orders from './orders'
import Nav from '../../Components/nav/nav'
import Logo from '../../Components/logo/logo'
import '../../scss/styles/saloon.scss'

const Saloon = () => {
  const [menu, setMenu] = useState(true)

  const arrMenu = [
    {menuText:'Menu', menuClass:'sidebar', menuClick:() => setMenu(!menu)},
    {menuText:'Pedidos', menuClass:'sidebar', menuClick:() => setMenu(!menu)},
  ];

  return (
    <div className='frame'>
      <aside className='sidebar'>
        <Logo use='sidebar'/>
        <Nav use='sidebar' arr={arrMenu}/>
      </aside>
      {menu && <Menu />}
      {!menu && <Orders />}
    </div>
  );
};

export default Saloon
import React, { useState } from 'react'
import Menu from './menu'
import Orders from './orders'
import Nav from '../../Components/nav/nav'
import Logo from '../../Components/logo/logo'


const Saloon = () => {
  const [menu, setMenu] = useState(true)

  const arrMenu = [
    {menuText:'Menu', menuClass:'sidebar', menuClick:() => setMenu(!menu)},
    {menuText:'Pedidos', menuClass:'sidebar', menuClick:() => setMenu(!menu)},
  ];

  return (
    <aside>
      <Logo use='sidebar'/>
      <Nav use='sidebar' arr={arrMenu}/>
      {menu && <Menu />}
      {!menu && <Orders />}
    </aside>
  );
};

export default Saloon
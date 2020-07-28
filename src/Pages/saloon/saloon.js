import React, { useState } from 'react'
import Menu from './menu'
import Orders from './orders'
import Button from '../../Components/button/button'



const Saloon = () => {
  const [menu, setMenu] = useState(true)
  return (
    <>
      <Button text='Menu' handleClick={() => setMenu(!menu)} />
      <Button text='Pedidos' handleClick={() => setMenu(!menu)} />
      {menu && <Menu />}
      {!menu && <Orders />}
    </>
  );
};

export default Saloon
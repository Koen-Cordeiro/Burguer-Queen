import React, { useState } from 'react'
import Menu from './menu'
import Button from '../../Components/button'



const Saloon = () => {
  const [menu, setMenu] = useState(true)



  return (
    <>
      <Button text='Menu' handleClick={() => setMenu(!menu)} />
      {menu && <Menu />}
    </>
  );
};

export default Saloon
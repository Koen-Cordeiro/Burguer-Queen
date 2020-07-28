import React, { useState } from 'react'
import Button from '../../Components/button'



const Orders = () => {
  const [menu, setMenu] = useState(true)



  return (
    <>
      <Button text='Menu' handleClick={() => setMenu(!menu)} />
      {menu && <Menu />}
    </>
  );
};

export default Orders
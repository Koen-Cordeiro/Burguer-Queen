import React from 'react'
import Button from '../../Components/button/button'
import './nav.scss'

const Nav = (props) => {
  const navClass=`nav-${props.use}`;
  const ulClass=`nav-${props.use}-ul`;
  const liClass=`nav-${props.use}-ul-li`;

  return (
    <nav className={navClass}>
      <ul className={ulClass}>
      {props.arr.map((e,index) => (
        <li className={liClass} key={index}>
          <Button key={e.menuText + index} type={e.menuClass} text={e.menuText} handleClick={e.menuClick}/>
        </li>
      ))}
      </ul>
    </nav>
  )
}

export default Nav
import React from 'react'
import logo from '../../img/logo.png'
import './logo.scss'

const Logo = (props) => {
  const logoClass = `logo-${props.use}`
  const imgClass = `logo-${props.use}-img`

  return (
    <div className={logoClass}>
      <img className={imgClass} alt='Logotipo Chase Burguer, nome em branco com bordas pretas e uma lupa vermelha no canto direito' src={logo} />
    </div>
  )
}

export default Logo

import React from 'react'
import {Link} from 'react-router-dom'
import './baseform.scss'

const BaseForm = (props) => {
  const inputClass = `input-${props.use}-${props.specific}`

  return (
    <div className='base-form-div'>
        <p className='base-form-inherit-align'>{props.text}{"\u00a0"}<Link to={props.link}>{props.anchorText}</Link></p>
    </div>
  )
}

export default BaseForm
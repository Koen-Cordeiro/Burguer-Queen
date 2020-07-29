import React from 'react'
import {Link} from 'react-router-dom'
import './baseform.scss'

const BaseForm = (props) => (
    <div className={props.classDiv}>
        <p className={props.classP}>{props.text}{"\u00a0"}<Link to={props.link}>{props.anchorText}</Link></p>
    </div>
  )

BaseForm.defaultProps =  {
  classDiv: 'base-form-div',
  classP: 'base-form-inherit-align'

}

export default BaseForm
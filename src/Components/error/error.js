import React from 'react'
import './error.scss'

const ErrorSpan = (props) => (<span className={props.classError}>{props.errorText}</span>)

ErrorSpan.defaultProps = {
  classError: 'alert'
}


export default ErrorSpan
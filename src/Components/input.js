import React from 'react'

const Input = (props) => (
  <>
    <label>{props.text}</label>
    <input type={props.type} />
  </>
)

export default Input
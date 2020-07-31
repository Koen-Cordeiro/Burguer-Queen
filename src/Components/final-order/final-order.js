import React from 'react'

const FinalOrder = ({data}) => (
  <div key={data.key}>
  <p key={data.type}>{data.type}</p>
  <p key={data.price}>R${data.price}</p>
  <span onClick={(event) => data.func(event, true)}>+</span>
  <div key={data.count + data.type}>{data.count}</div>
  <span onClick={(event) => data.func(event, false)}>-</span>
</div>
)

export default FinalOrder
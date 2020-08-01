import React from 'react'

const FinalOrder = ({data}) => {
  return (
  <div key={data.key}>
  <p key={data.type}>{data.type}</p>
  <p key={data.price}>R${data.price}</p>
  {data.meat && <p>{data.meat}</p>}
{data.extras && <span className={JSON.stringify(data.extras)}>
  {data.extras.Queijo && <p>Queijo</p>}
  {data.extras.Ovo && <p>Ovo</p>}

</span>
}
  <span onClick={(event) => data.func(event, true)}>+</span>
  <div key={data.count + data.type}>{data.count}</div>
  <span onClick={(event) => data.func(event, false)}>-</span>
</div>
)}

export default FinalOrder
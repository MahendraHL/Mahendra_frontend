import React, { useContext } from 'react'
import { DataContext } from './ParentContext'

const GrandChildContext = () => {
    const [data,setData]=useContext(DataContext)
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=>setData(data+1)}>Increment</button>
    </div>
  )
}
export default GrandChildContext
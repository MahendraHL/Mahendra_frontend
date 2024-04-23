import React from 'react'
import WithLogger from '../utils/WithLogger'

const MyComponent=({message})=>{
    return <div>{message}</div>
}
WithLogger(MyComponent)
export default MyComponent
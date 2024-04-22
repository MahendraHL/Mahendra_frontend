import React from 'react'
import Child from'./Child'

const Parent = (props) => {
  return(
   <div><Child{...props}/></div>
  )
}
export default Parent; 
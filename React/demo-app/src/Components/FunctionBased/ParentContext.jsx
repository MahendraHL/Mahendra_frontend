import React,{useState} from 'react'
import ChildContext from './ChildContext'

export const DataContext=React.createContext();
const ParentContext = () => {
    const [data,setData]=useState(0)
  return (
    <DataContext.Provider value={[data,setData]}>
        <ChildContext/>
    </DataContext.Provider>
  )
}
export default ParentContext
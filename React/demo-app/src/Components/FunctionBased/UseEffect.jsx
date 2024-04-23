import React,{useEffect,useState} from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Effect-1")
    },[count])
  return (
    <div>
        {console.log("render")}
        <button onClick={()=>setCount(count+1)}>Change</button>

    </div>
  )
}

export default UseEffect
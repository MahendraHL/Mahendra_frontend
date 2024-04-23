import React,{useState} from 'react';

const Counter=()=>{
    const [count,setCount]=useState(0)

return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>IncementBy1</button>
    <button onClick={()=>setCount(count+10)}>IncementBy10</button>
    <button onClick={()=>setCount(count-1)}>DecrementBy1</button>
    <button onClick={()=>setCount(count-10)}>DecrementBy10</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </>
)
}
export default Counter
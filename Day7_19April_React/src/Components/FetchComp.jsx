import axios from 'axios';
import React,{useEffect, useState} from 'react'

export const FetchComp = () => {
    const [data,setData]=useState();
    useEffect(()=>{
        apiFetch();
        async function apiFetch(){
            const res=await axios.get("https://p-9x7e.onrender.com/products/products",{})
            console.log(res.data);
            setData(res.data.data)
         }  
    },[])
  return (
   
   <div>data fetched</div>
  )
}
export default FetchComp

import React, { useState } from 'react'

function Counter(){
    const [count,setCount]=useState(0);
    const [history,setHistory]=useState([0])

    const increment=()=>{
        setCount(prev=>{
            const newValue=prev+1;
            setHistory(h=>[...h,newValue]); 
            return newValue;
        })
    }

    const decrement=()=>{
        setCount(prev=>{
            const newValue=Math.max(prev-1,0);

            if(newValue!==prev){
            setHistory(h=>[...h,newValue]);
            }
            return newValue;
        })
    }
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h3>History</h3>
        <ul>
            {history.map((val,index)=>(
                <li key={index}>{val}</li>
            ))}
        </ul>
    </div>
  )
}
export default Counter;
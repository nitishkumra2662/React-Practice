 import React ,{useState} from 'react'
 import './Counter.css'

 const Counter = () => {
    const [count, setCount] = useState(0);
   return (
     <div className='counterContainer'>
        <p id='para'>
            You have Clicked {count}times
        </p>
        <button id='addBtn' onClick={()=>{setCount(count+1)}}>
            Click Me
        </button>
     </div>
   )
 }
 
 export default Counter
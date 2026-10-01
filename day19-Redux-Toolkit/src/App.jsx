 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './app/Store'
import { decrement, increment } from './features/CounterSlice';
 
 const App = () => {
  let dispatch = useDispatch();
 let {count} = useSelector((store)=> store.counter)

   return (
     <div>
       <h1>My count is {count}</h1>
       <button onClick={() => dispatch(decrement())}>Decrement</button>
       <button onClick={()=> dispatch(increment())}>Increment</button>
     </div>
   )
 }
 
 export default App
 
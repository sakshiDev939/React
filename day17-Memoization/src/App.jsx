import React, { useCallback, useMemo, useState } from 'react'
import Home from '../components/Home'
import About from '../components/About'

const App = () => {
  console.log("App rendering....")
  const [count,setCount] = useState(0);
  const [users, setUsers] = useState({name: "raghav",id:789})
 
    // let greet = 10;
     
    let greet = useCallback(()=>{
      console.log("good evening...")
    },[])


    let calculation = useMemo(() => {
      console.log("calculation running....")
      let sum = 0;

    for(let i =0; i < 1000000000; i++){
      sum += i;
    }

    return sum; 
} , []);



  return (
    <div>
      <h1>memoization</h1>
     <h2>Count is {count}</h2>
     <h2>Name is {users.name}</h2>

     <button onClick={() => setUsers({...users, name:"ranjeet"})}>Change name{" "}</button>

<button onClick={()=> setCount(count +1)}>Increment</button>

<Home greet ={greet} />
<About greet ={greet}  />
    </div>
  )
}

export default App

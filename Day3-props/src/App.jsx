import React , { useState} from 'react';


const App = () => {

  
  let [count, setCount] = useState(0);

  console.log(count);

  return (
    <div>
     
     <h1>Count is - {count}</h1>

     <button 
     onClick={() =>{
      setCount(count + 1);
     }}
     >
      Increment</button>

    </div>
  );
};

export default App;

import React, { useState } from "react";

const App = () => {
  console.log("app rendering...");

  const [count, setCount] = useState(0);
  let [user, setUser] = useState(0);

  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>name is - {user}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          user++;
        }}
      >
        Change name
      </button>
    </div>
  );
};

export default App;
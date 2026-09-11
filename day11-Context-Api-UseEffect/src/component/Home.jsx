import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Home = () => {
  let { count, setCount } = useContext(MyStore);

  console.log("home rendering...");

  return (
    <div>
      <h1>Home page</h1>
      <h1>Hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Home;
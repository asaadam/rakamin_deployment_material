import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  return (
    <div className='App'>
      <div>{counter}</div>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;

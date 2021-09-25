import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 2);
  const decrement = () => setCounter((prev) => prev - 1);
  return (
    <div className='App'>
      <div>{counter}</div>
      <button onClick={decrement}>dikurangi</button>
      <button onClick={increment}>ditambah</button>
    </div>
  );
}

export default App;

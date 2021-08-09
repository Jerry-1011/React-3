import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

function App() {
  const [number1, num1] = useState(0);
  const [number2, num2] = useState(0);
  const [total, Total] = useState(number1 + number2);
  function findtotal() {
    Total(number1 + number2);
  }
  return (
    <div className="App">
      <div className="n">
      <div className="n">
        <input
          type="number"
          value={number1}
          onChange={e => num1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          onChange={e => num2(+e.target.value)}
          placeholder="0"
        />
      </div>
      <button onClick={findtotal}>Add The Number!!!</button>
      <h1>{total}</h1>
    </div>
      </div>
  );
}
export default App;

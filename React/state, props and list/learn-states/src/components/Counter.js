import React from "react";
import { useState } from "react";

function Counter() {
  //   const count = 0;
  // useState create a state object and it return two values in an array ,
  // useState returns an Array
  let [count, setCount] = useState(0);

  function updateCount() {
    // setCount(++count);
    setCount(count + 1);
    // count++;
    // setCount(count);
    console.log(`count is ${count} `);
  }
  return (
    <>
      <p>the value of count is :{count}</p>
      <button onClick={updateCount}>increment</button>
    </>
  );
}

export default Counter;

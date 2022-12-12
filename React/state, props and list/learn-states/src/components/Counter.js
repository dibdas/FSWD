import React from "react";
import { useState } from "react";

function Counter() {
  console.log("counter");
  // useState is actaully defining the function setCount and we are just calling it
  // by doing it setCount(count+1) and returning from  let [count, setCount] = useState(0);

  //   const count = 0;
  // useState create a state object and it return two values in an array ,
  // useState returns an Array
  // let countState = useState(0); // adding the value 0 to index[0]
  // console.log(countState);
  // let setCount = countState[1];
  // let count = countState[0];
  // count = 0; // this wont like   let countState = useState() so dont try
  // after destructuring
  // let [count, setCount] = useState(0);

  // when component get re-rendered it creating new component new variable new function
  // new count variable , only value gets updatedand changed
  const [count, setCount] = useState(0);

  function updateCount() {
    // setCount(++count);
    setCount(count + 1);
    //count += 1; // not allowed while using const variable
    // setCount(count);
    console.log(`count is ${count} `);
  }
  return (
    <>
      {/* only the parag */}
      <p>the value of count is :{count}</p>
      <button
        onClick={(e) => {
          updateCount();
          console.log(e);
        }}
      >
        increment
      </button>
      {/* <button
        onClick={(e) => {
          setCount(count + 1);
          console.log(e);
        }}
      >
        increment
      </button> */}
    </>
  );
}

// when you call setcount function is called, the component is called again,
//  i.e it gets re-rendered it gets mounted and the previous component is removed
// i.e unmounted from the DOM, a new component is made with same
//  name is created , and the same thing happens again again we get the count variable
// and setCount but the count value has changed , it gets the updated value
// all the update operation are done in the virtual DOM,
// setCount is creating another component ,when it is called and the new value is assined to
// count variable
// const [count, setCount] = useState(0);
// count = count + 1; // not allowed , as it is trying to change the vale of const variable
// setCount(count + 1); // setCount is creating another component with updateed value of count

// state variable can retains its value and it can re-render the entire component

export default Counter;

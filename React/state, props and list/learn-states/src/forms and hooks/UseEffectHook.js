import React, { useEffect } from "react";
import { useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  // cleanup work here i.e clean up function
  function callThisOnUnmount() {
    console.log(`call this on unmount, callThisOnUnmount function `);
  }

  // rendering is what is shown on the screen
  // while updation first is rendering after rendering stops then is useEffect called or executed before any function is called

  // useEffect takes a function i.e ()=>{} and an dependency  array, where we declare
  // the varaible ,if the that variable updates useEffect will be called
  useEffect(() => {
    // in the begining the useEffect run two times, first when the component mount or the
    // initial render,second is for React.strictmode
    console.log(`counter updated ${counter}`);

    return callThisOnUnmount();
    // or
    // this below return function is called while componenet is being unmounted
    // return () => {
    //   console.log(
    //     `called while the component is being unmounted , it is also called as clean up function `
    //   );
    // };
  }, [counter]);
  // useEffect will be called if either name or counter is being updated
  // }, [counter, name]);
  // useEffect will be called once at the time of mounting
  // }, []);

  useEffect(() => {
    console.log(`when first time mounted`);
  }, []);

  useEffect(() => {
    console.log(`when name is being updated`);
  }, [name]);

  useEffect(() => {
    console.log(`renderng happend with dependency array`);
  });

  return (
    <div>
      <p>{counter}</p>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <br />
      <br />
      <button onClick={() => setCounter(counter + 1)}>increament</button>
    </div>
  );
}

export default UseEffectHook;

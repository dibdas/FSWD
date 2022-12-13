import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Hooks() {
  // useState triggers re-rendering
  const [counter, setCounter] = useState(0);
  //   useState does not trigger re-rendering
  const refCounter = useRef(0);
  let normalCounter = 0;
  useEffect(() => {
    console.log(`state counter ${counter}`);
    console.log(`normal counter ${normalCounter}`);
    console.log(`ref counter ${refCounter.current}`);
    return () => {
      // first the pervious component is unmounted ,so first is unmounting then
      // new component is rendered or re-rendered, then mounting after updating
      //   after clicking normalCounter is 1 but after re-rendering normalcounter is again 0 ,
      //    as it does not retain it value, but state value does
      console.log(`unmounting component here`);
    };
  });
  function increment() {
    // re-rendering happens in setCounter i.e useState triggers re-rendering
    // below line triggers re-rendering
    // counter is a state variable so it retain it value on re-rendering new component
    setCounter(counter + 1);
    normalCounter = normalCounter + 1;
    // re-rendering does not happens in refCounter i.e useRef does not trigger re-rendering
    // below line does not triggers re-rendering
    // refCounter is not a state variable so it  does not retain its value on re-rendering new component
    refCounter.current += 1;
  }
  return (
    <div>
      <p>state counter : {counter}</p>
      <p>ref counter : {refCounter.current}</p>

      {/* <button onClick={() => setCounter(counter + 1)}>increament</button> */}
      <button onClick={increment}>increament</button>
    </div>
  );
}

export default Hooks;

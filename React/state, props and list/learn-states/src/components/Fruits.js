import React from "react";
import { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState("apple");
  const [inputText, setInputText] = useState("");

  function fruitsUpdate(fruit) {
    setFruits(inputText);
  }

  // automatically get the event from on change
  function handleChange(event) {
    // console.log(event);
    // target of the event is input , to get the value from the input is event.target.value
    const currInputValue = event.target.value;
    setInputText(currInputValue);
  }
  return (
    <>
      <h3>the value of fruit is: {fruits}</h3>
      {/* output in real time */}
      <h2>the value of fruit is: {inputText}</h2>

      {/* here we are calling the function,so it will re-render the whole component,and make the
      state banana, as soon as as it gets re-rendered, again the function will be called
      so again re-render will occur ,again componenet get re-rendered agin state function
      gets called.... so it enter into infinite loop */}
      {/* <button onClick={setFruits("banana")}>kela</button> wont work */}
      {/* <button onClick={(setFruits) => setFruits("banana")}>banana</button> */}
      {/* here we are passing the function inside an anonymous function and on clicking
      whatever inside the anonuymous will be executed*/}
      {/* <button onClick={() => setFruits(`papaya`)}>papaya</button> */}
      {/* <button onClick={() => setFruits("guava")}>guava</button> */}
      {/* <button onClick={() => fruitsUpdate(`mango`)}>mango</button> */}

      {/* when you click on submit button ,it the respective function is being 
      passed and called at the back*/}
      {/* <button onClick={() => fruitsUpdate()}>submit</button> */}
      {/* or */}
      {/* when you click on submit button ,it the respective function is being 
      passed and called at the back*/}
      {/* <button onClick={fruitsUpdate}>submit</button> */}
      {/* or */}
      {/* event is also coming from onClick handler but not using  */}
      <button onClick={() => setFruits(inputText)}>submit</button>

      {/* onChange is an event handler , and it be called everytime when you insert every single time */}
      {/* <input onChange={handleChange} /> */}
      {/* or */}
      {/* event is coming from event handler onChange and target of the event is input */}
      <input onChange={(event) => setInputText(event.target.value)} />
    </>
  );
}

export default Fruits;

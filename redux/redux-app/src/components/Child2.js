import React from "react";
import { useSelector } from "react-redux";

function Child2() {
  // useSelector provides you the entire store
  //   accessing the value message from the state.messageReducer
  //   stateC just a variable , useSelector providing the whole store
  //   (stateC) => stateC.messageReducer.message) .., it is the way to subscribe
  //   subscribing to the messageReducer.message
  // here we trying to access the data of message of messageReducer not anyother data, we will get to
  //   know only when the message is getting updated
  const message = useSelector((stateP) => stateP.messageReducer.message);
  const counter = useSelector((sate) => sate.messageReducer.counter);
  console.log(message);
  return (
    <div>
      child2 <p>the data from child1 is: {message}</p>
      <p>{counter}</p>
    </div>
  );
}

export default Child2;

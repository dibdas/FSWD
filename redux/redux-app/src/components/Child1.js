import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  resetMessage,
  setMessage,
  increaseCounter,
} from "../redux/slices/messageSlice";

function Child1() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    inputRef.current.value = " ";
    // it is the way to dispatch the action
    // passing the data through dispatch,and it goes inside the payload,payload can of any type
    // setMessage create its type , no need to define it externally , type will be simmilar to that of
    // the type defined in the messageSlice reducer
    // please hover over the setMessage payload and type can be seen
    // inputValue goes to action.payload , and state value gets updated

    dispatch(setMessage(inputValue));
    // dispatch(resetMessage(" "));
  }
  function handleClick() {
    dispatch(increaseCounter());
  }
  return (
    <div>
      Child1
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <button onClick={handleClick}>increase</button>
    </div>
  );
}

export default Child1;

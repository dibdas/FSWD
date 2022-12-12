import React, { useState } from "react";

function Child1(props) {
  const [countInChild1, setCountInChild1] = useState(0);
  function updateCountInChild1() {
    setCountInChild1(countInChild1 + 1);
    // child1 to parent
    props.onCountUpdate(countInChild1 + 1);
  }
  return (
    <div>
      <p>Inside the child1:{countInChild1}</p>
      {/* <button onClick={() => setCountInChild1(countInChild1 + 1)}> */}
      <button onClick={() => updateCountInChild1()}>Increament</button>
      {/* or */}
      {/* <button onClick={updateCountInChild1}>Increament</button> */}
    </div>
  );
}

export default Child1;

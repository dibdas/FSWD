import React from "react";

function Child2(props) {
  const showPrivateData = false;
  return (
    <div>
      {showPrivateData ? <p>This is private:hello</p> : <></>}
      {/* making the show private true and show the message */}
      {!showPrivateData && <p>This is private:hello</p>}
      <p>count inside child 2 from parent :{props.countFromParent}</p>
      {/* we actually calling the function which is defined in the parent by clicking on the button */}
      <button onClick={props.uploadData}>Upload data</button>
    </div>
  );
}

export default Child2;

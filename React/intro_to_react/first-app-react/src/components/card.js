import React from "react";
import Avatar from "./avatar";

function Card({ name, email, ...props }) {
  // functions return the JSX elements becomes a component
  const myStyle = {
    border: `2px solid black`,
    padding: `1rem`,
    boxShadow: `2px 2px 2px grey`,
  };

  function handleClick() {
    alert("warning");
  }
  return (
    // <div>
    //   <h1>Amit Kumar Sharma</h1>
    //   <p>a.sharma@gmail.com</p>
    // </div>

    <div style={myStyle}>
      <Avatar name={name} image={props.image} />
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{props.age}</p>
      <p>{props.mobile}</p>

      {/* this will work only when the component got reloaded , but after thay when you 
      click on the button the the alert box will not pop up*/}

      {/* <button onClick={handleClick()}>Click me</button> */}

      {/* this will work only when the component got reloaded , but after thay when you 
      click on the button the the alert box will not pop up*/}

      {/* <button onClick={alert("warning")}>Click me</button> */}
      {/* passing an arrow anonymous function */}
      {/* <button onClick={() => alert("warning")}>Click me</button> */}

      {/* passing an anonymous function */}
      <button
        onClick={function () {
          alert("warning");
        }}
      >
        Click me
      </button>
    </div>
  );
}
export default Card;

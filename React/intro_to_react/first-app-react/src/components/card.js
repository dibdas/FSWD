import React from "react";
import Avatar from "./avatar";

function Card({ name, email, ...props }) {
  // functions return the JSX elements becomes a component
  const myStyle = {
    border: `2px solid black`,
    padding: `1rem`,
    boxShadow: `2px 2px 2px grey`,
  };
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
    </div>
  );
}
export default Card;

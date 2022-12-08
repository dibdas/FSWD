// imported from node_modules/react
import React from "react";
// imported from node_modules/react-dom-client
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// accessing the root div in index.html , and making it root element of react
// inside the ReactDOM there is function called createRoot, there can be only one root
// element inside the application
// ReactDOM.createRoot ... virtual DOM creation starts like exact of the REAL DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// not acceptable the below line two top level elements <h1></h1>and <p></p>
// const myHello = <h1>HEllo there I am in JSX!..</h1><p>pragraph</p>
// one top level element i.e <div></div>

// border-radius:4px -> borderRadius:5px
// { backgroundColor: "blue", color: "white" } -> javascript object
const pstyle = {
  fontSize: `2rem`,
  backgroundColor: `grey`,
  border: `2px solid black`,
  paddingBlock: `1rem`,
};
{
  /* <h1></h1><p></p> these are known as React elements */
}
// myHello as a whole is a JSX Element, even p and h1 is also React element

// React elements areimmutable

const listed_elements = (
  <ul>
    <li>cricket</li>
    <li>football</li>
    <li>hockey</li>
    <li>basketball</li>
  </ul>
);
const hi = false;
let subHeading = "";
if (hi) {
  subHeading = `hi`;
} else {
  subHeading = `bye`;
}

const myHello = (
  <div style={{ backgroundColor: "blue", color: "white" }}>
    <h1 style={{ fontSize: `2rem` }}>HEllo there I am in JSX!..</h1>
    {/* <p style={pstyle}>hi.....there</p> */}
    {/* <p style={pstyle}>{hi ? `hi` : `bye`}</p> */}
    <p style={pstyle}>{subHeading}</p>
  </div>
);
// root.render(myHello);

// function myClock() {
//   // console.log(`my clock render`);
//   root.render(
//     <div>
//       {/* React DOM compares with the resent Real DOM , and the current virtual DOM , so react
//       update the node which are required to be updated i.e which has actually changed
//       thats why only changing p tag not h2 tag,as h3 tag remains the same  */}
//       <p style={{ fontSize: `3rem` }}>{new Date().toLocaleTimeString()}</p>
//       <h2>this is not getting re rendered</h2>
//     </div>
//   );
// my myClock is calling itself afer every 1second, after every 1second
// root.render will start execute, aand again render after 1seconds
// console.log(`my clock render`);
// calling the myClock function recursively inside the setTimeout
//setTimeout(myClock, 1000); // calling my click after every 1seconds
//setTimeout(myClock); // calling my click after every 1seconds, same as before`
//setTimeout(myClock, 3000); // calling my click after every 3seconds
// }
// console.log(`my clock render`);
// myClock()--> it is used to call the th myclock function only once after that,just
//  to initiate the process , after that setTimeout will call myclock after every seconds
// and root.render will execute
//myClock();

// using setInterval my clock will also work
// setInterval(() => {
//   myClock();
// }, 1000);

// root.render(myHello);
// root.render(myClock());

// root.render(listed_elements);

//root.render(
// <React.StrictMode>
//   <App />
// </React.StrictMode>
//);

// if any props is there that is being passed into the Card component we use ...props,
// and the rest of the values other than name and email will get into ...props, and can be
// accessed by using props
function Card({ name, email, ...props }) {
  // functions return the JSX elements becomes a component
  return (
    // <div>
    //   <h1>Amit Kumar Sharma</h1>
    //   <p>a.sharma@gmail.com</p>
    // </div>

    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{props.age}</p>
      <p>{props.mobile}</p>
    </div>
  );
}
// root.render(<Card /><Card /><Card />); // will have error , JSX expression must one parent element

root.render(
  <div>
    <Card name="amit" email="amit@gmail.com" age="43" mobile="android" />
    <Card name="ankita" email="ankita@gmail.com" age="7" mobile="blackbarry" />
    <Card name="chadni" email="chadni@gmail.com" age="13" mobile="ios" />
  </div>
);

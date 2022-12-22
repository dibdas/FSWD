// import xyz from "./utils.js"; // ES6 syntax

// importing as an object
// multiply  is an object contains the function multiple
// const multiply = require("./utils.js");  output --> { multiply: [Function: multiply] }
const { multiply: mul } = require("./utils.js");
console.log(mul(7, 9));

// any name can be given if not destructuring
const multiple = require("./utils"); // common Js syntax
// multiple is an object contains the function multiple
console.log(multiple); // { multiply: [Function: multiply] }
console.log(multiple.multiply(9, 6));

// const a = 9;
// const b = 8;
// console.log(a + b);

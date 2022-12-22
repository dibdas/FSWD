// import xyz from "./utils.js"; // ES6 syntax
// const multiply = require("./utils.js");  output --> { multiply: [Function: multiply] }
const { multiply } = require("./utils.js");

console.log(multiply(7, 9));

// const a = 9;
// const b = 8;
// console.log(a + b);

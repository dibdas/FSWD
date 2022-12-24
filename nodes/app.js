// import xyz from "./utils.js"; // ES6 syntax

// importing as an object
// multiply  is an object contains the function multiple
// const multiply = require("./utils.js");  output --> { multiply: [Function: multiply] }
// importing and destructuring the function
//const { multiply } = require("./utils.js");
//console.log(multiply(7, 9));

// any name can be given if not destructuring
//const multiple = require("./utils"); // common Js syntax
// multiple is an object contains the function multiple
// console.log(multiple); // { multiply: [Function: multiply] }
//console.log(multiple.multiply(9, 6));

// importing, destructing and defining it with another name
// const { multiply: mul } = require("./utils.js");
// console.log(mul(7, 8));
// const a = 9;
// const b = 8;
// console.log(a + b);

// const utils = require("./utils");
// utils.log.warning(`this is just an info`);
// utils.log.error(`this is just an info`);
// const { log: information } = require("./utils");
// console.log(information.warning(`this is just an info`));
// console.log(information.error(`this is just an info`));

// importing the express
const express = require("express");
// invoking the express, getting the express app
const app = express();
// express does not work with req.body.., if express need to workout with body.., need to pass middleware
// named as body parser...or  here using express.json().. which works as parser
app.use(express.json());

// when the server hits the desired url '/user' then inside the server this anonymous function
// i.e (req, res) => {} will run whe request and response is being passed
app.get("/user", (req, res) => {
  console.log("User called");
  //   res.send(`hello User `);
  res.send({
    name: `amit`,
    age: 31,
  });
});
// it shows the complete path before this file,it actually bring path directory of this file
console.log(__dirname); // it shows the complete path before this file,it actually bring path directory of this file
app.get("/", (request, response) => {
  //   res.send(`<h1>server is now working</h1>`);
  //   while sending the output of a file , need to paste the complete path
  //   res.sendFile(`/home/dell/FSWD/nodes/index.html`);
  //   res.sendFile(__dirname + "/index.html");
  response.sendFile(`${__dirname}/index.html`);
  // highly optimized for json only response.json .. on;y json can be send
  //   response.json({ success: true }); //.json highly optimized for json only
  //   response.send ... anything can be send by response.send
  //   response.send({ success: true }); // anything can be send
});

// alaway response in the form of res.json not res.send
app.post("/user", function (req, res) {
  console.log(req.body);
  const sum = req.body.a + req.body.b;
  //   res.json(sum);
  const multipy = req.body.a * req.body.b;

  res.json({
    name: `karan`,
    age: 61,
    sum,
    multipy,
  });
});

// to check whether the server is listening or not , runor the call the callback function, where you can do anything
// here we are doing console.log("listening to port :4000");
// callback function i.e () => {} is there check whether it is listening properly or not, therefore
// after listin to port No. 5000 it calls or run  the callback function
// after app listen it calls or run the callback function and output give listening to port :5000 in the terminal

app.listen(5000, function () {
  console.log("listening to port :5000");
});

// app.listen(5000, () => {
//   console.log("listening to port :5000");
// });

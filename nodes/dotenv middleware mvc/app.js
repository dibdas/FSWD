const dotEnvName = require("dotenv");
// configuring the file ,the variable inside the.env file has become environment variables
dotEnvName.config({ path: "./.env" });
const express = require("express");
// by default it will go to index.js as index.js is entry point of any folder in javascript
// in order to de clutter the the app.js or index.js using the router,we structure the project
// into different APIs and its end Points

const mainRouter = require("./routes/");

// importing post router
// moving to the router folder
// const postRouter = require("./routes/post");
// importing auth router
// moving to the router folder
// const authRouter = require("./routes/auth");
// console.log(express);
// extracting the object from the express
const app = express();
// console.log(app);

// passing the arrow function as a callback
// while passing arrow function as a callback , it needs to be declared and defined first , and then
// called or passed
//app.get("/", trial); //ReferenceError: Cannot access 'trial' before initialization
//const trial = (req, res) => {
//   res.send({
//     data: "ok",
//   });
// };
// app.get("/", trial);
// const PORT = 8000;
//app.listen(PORT, listenG); // ReferenceError: Cannot access 'listenG' before initialization
// const listenG = () => {
//   console.log(`server is listening on port 8000`);
// };
// app.listen(PORT, listenG); // working

// now withount using the arrow function ,calling or passing is being done before declaring or defining
// app.get("/", trial);
// function trial(req, res) {
//   res.send({
//     data: "ok",
//   });
// }
// const PORT = 8000;
// wherever the server runs , it is the responsibility of the process of that OS to provide the PORT data
// OS has the object named as process which is grabbing the environment variable PORT
const PORT = process.env.PORT; // getting the data PORT by using process.env.PORT by the procees of the OS
// can access secret_api_key, as path of .env has been configured in the above line second line
console.log(process.env.SECRET_API_KEY);

// router is also a kind of middleware
// when the url hit the /post routes API end point, postRouter will be triggered
// control comes to the app.js  first and checks the routes API and its end points ,
// then it gets redirected to desired router,
// postRouter wil work when the API end points is /post
// moving to routes folder
// app.use("/post", postRouter);
// when the API end points includes /auth, it will redirect to authRouter , then authRouter will decide
//  upon API end points which router it should call
// control comes to the app.js  first and checks the routes API end points ,
// then it gets redirected to desired router
// moving to routes folder
// app.use("/auth", authRouter);
// so the routes will go like /api/post/all or /api/auth/login or signup
// so entry point is app.js request will go to mainRouter as /api,then request will go to
// postrouter i.e post module then  endpoint i.e all
// /api/post/all
// so entry point is app.js  requestwill go to mainRouter as /api ,then request will go to authrouter
//  as /auth i.e  auth module then login,signup endpoints as end point /login or signup
// /api/auth/login
// main router is the parent router where request will go first then the request goes to
// authRouter and postRouter which is the child router
app.use("/api", mainRouter);
// OR
app.use("/", mainRouter);

app.get("/", (req, res) => {
  res.send({
    data: "ok",
  });
});
app.listen(PORT, listenG);
function listenG() {
  console.log(`server is listening on port ${PORT}`);
}

// b();
// // ^ReferenceError: Cannot access 'b' before initialization
// const b = () => {
//   console.log(PORT);
// };

// app.get("/post", (req, res) => {
//   res.json({
//     id: "123",
//     title: "hello",
//     description: "hello there how are you",
//   });
// });

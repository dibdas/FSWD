// only for the post routes
const express = require("express");
// router is a kind of mini app,whatever app does,router almost does the same thing
const router = express.Router();

// app.get("/", (req, res) => {
router.get("/", (req, res) => {
  res.json({
    id: "123",
    title: "hello",
    description: "hello there how are you",
    age: "45",
  });
});
router.get("/all", (req, res) => {
  res.json({
    //     id: "12356",
    //     title: "hello hi",
    //     description: "hello!!!! there how are you",
    //     age: "35",
    //   });
    data: [
      {
        title: "hello",
      },
      {
        description: "hello!.... there how are you",
      },
    ],
  });
});

module.exports = router;

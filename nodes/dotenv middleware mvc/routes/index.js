// index.js  is the entry point of any folder inside javascript
const router = require("express").Router();
console.log(router); //function
const postRouter = require("./post");
const authRouter = require("./auth");
router.use("/post", postRouter);
router.use("/auth", authRouter);
module.exports = router;

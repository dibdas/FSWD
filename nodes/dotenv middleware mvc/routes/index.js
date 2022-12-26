// index.js  is the entry point of any folder inside javascript
// will use this logger middleware before it goes to the auth router
const router = require("express").Router();
const { logger } = require("../middlewares/Logger");

console.log(router); //function
const postRouter = require("./post");
const authRouter = require("./auth");

router.use("/post", postRouter);
// multiple middlewares can be used in here in between
router.use("/auth", logger, authRouter);
module.exports = router;

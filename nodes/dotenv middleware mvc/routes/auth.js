const { loginController, signupController } = require("../controllers/auth");
const { logger } = require("../middlewares/Logger");

// breaking the code into layers to enhance its scalibility , helps in debugging
const router = require("express").Router();
// router.post("/login", (req, res) => {
//   res.json({
//     text: `this is for login`,
//   });
// });
// moving the below to login controller
// (req, res) => {
//   res.json({
//     text: `this is for login`,
//   });
// });
// can implement couple of middlewares here beside the logger
router.post("/login", logger, loginController);

// router.post("/signup", (req, res) => {
//   res.json({
//     text: `this is for sign up`,
//   });
// });
// moving the code below to signup controller
// (req, res) => {
//   res.json({
//     text: `this is for sign up`,
//   });
// });
//  can implement couple of middlewares here beside the logger
router.post("/signup", logger, signupController);

module.exports = router;

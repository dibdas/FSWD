const { loginController, signupController } = require("../controllers/auth");

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
router.post("/login", loginController);

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
router.post("/signup", signupController);

module.exports = router;

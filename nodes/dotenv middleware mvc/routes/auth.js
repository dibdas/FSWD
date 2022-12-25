const router = require("express").Router();
router.post("/login", (req, res) => {
  res.json({
    text: `this is for login`,
  });
});

router.post("/signup", (req, res) => {
  res.json({
    text: `this is for sign up`,
  });
});

module.exports = router;

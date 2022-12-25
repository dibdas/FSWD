const signupController = async (req, res) => {
  console.log(`signup controller called`);
  res.json({
    text: `this is for signup`,
  });
};
const loginController = async (req, res) => {
  console.log(`login controller called`);
  res.json({
    text: `this is for login`,
  });
};
module.exports = { signupController, loginController };

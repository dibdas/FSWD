const Users = require("../models/User");
// as we are not using mongodb, all the data are being stored in javascriot memory, so when you
// reload the server , which are being deleted from the javascriot memory which are being
// created at the time of creation

const signupController = async (req, res) => {
  console.log(`signup controller called`);

  // res.json({
  //   text: `this is for signup`,
  // });
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    // res.status(403).send(`email and password are required `)
    res.json({
      status: 403,
      text: `email and password are required `,
    });
    // control flow return from here
    return;
  }
  // creating the id
  // const id = Math.floor(Math.random() * 1000); removing the id as id created by mongoose by default
  // check if the user email is already present or not
  // users.push({ id, email, password });

  const findUser = await Users.findOne({ email });
  if (findUser) {
    res.status(403).json({
      text: `user present sign up with another email`,
    });
    return;
  }
  const newuser = new Users({ email, password });
  const user = await newuser.save();

  // res.status(200).json({
  //   id,
  //   email,
  //   password,
  // });

  res.status(200).json({
    user,
  });
  // control flow return from here
  return;
};
const loginController = async (req, res) => {
  console.log(`login controller called`);
  // res.json({
  //   text: `this is for login`,
  // });
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    res.status(401).json({
      text: `email password required`,
    });
    // control flow return from here
    return;
  }
  // const user = users.find((user) => user.email === email);
  const user = await Users.findOne({ email });
  if (!user) {
    res.status(404).json({ text: `User not found` });
    // control flow return from here
    return;
  }
  if (user.password !== password) {
    res.status(404).json({ text: `incorrect passowrd` });
    // control flow return from here
    return;
  }
  res.status(200).json(user);
};

const fetchUserController = (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  console.log(id, users, user);
  if (!id) {
    res.status(403).json({ text: `user id is required` });
    return;
  } else if (!user) {
    res.status(404).json({ text: `user not found` });
    return;
  } else {
    res.status(200).json({ user });
    return;
  }
};
module.exports = { signupController, loginController, fetchUserController };

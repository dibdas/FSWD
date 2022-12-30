// const users = [
//   {
//     id: `456863`,
//     email: `amit@gmail.com`,
//     password: `4678`,
//   },
//   {
//     id: `456789`,
//     email: `ranjit@gmail.com`,
//     password: `3798`,
//   },
// ];

const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    // email has to pass , as it is set to required
    required: true,
  },
  marks: {
    type: Number,
    default: 0,
  },
  password: String,
});
module.exports = users;

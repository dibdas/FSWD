const mongoose = require("mongoose");
// with the help of mongoose , schema is being made
const userSchema = mongoose.Schema({
  email: String,
  password: String,
  //   age: Number,
  //   name: String,
  //   hobbies:[Number] // storing array of numbers
  //   hibbies:[String] // storing the array of String values
});
// model name is user
// name of the schema is userSchema

// module.exports = mongoose.model("user", userSchema);
module.exports = mongoose.model("user", userSchema);

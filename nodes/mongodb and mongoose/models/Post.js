const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: String,
  description: String,
  likes: Number,
  //   storing userId in  the post as the post is made by some user only
  //    basically connecting the post with user
  user: mongoose.Types.ObjectId,
});
module.exports = mongoose.model("post", postSchema);

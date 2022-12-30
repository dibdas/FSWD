const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("../mongodb and mongoose/models/User");

// derived from the mongodb atlas website / connect to application
const mongoUrI =
  "mongodb+srv://peter:hfouAQ79nQFVCwWf@cluster2.icw3kk1.mongodb.net/?retryWrites=true&w=majority";

// connecting();
// function connecting() {
//   try {
//     mongoose.connect(
//       mongoUrI,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         //   serverApi: ServerApiVersion.v1,
//         // useCreateIndex: true,
//         // useFindAndModify: true,
//       },
//       () => {
//         console.log(`hello there!...  mongoose connected..awesome keep coding`);
//       }
//     );
//   } catch (error) {
//     console.log(`error ${error}`);
//   }
// }

// no nned to write the async function here , as callback will take care of it
module.exports = () => {
  try {
    mongoose.connect(
      mongoUrI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //   serverApi: ServerApiVersion.v1,
        // useCreateIndex: true,
        // useFindAndModify: true,
      },
      () => {
        console.log(`hello there!...  mongoose connected..awesome keep coding`);
      }
    );
  } catch (error) {
    console.log(`error ${error}`);
  }
};

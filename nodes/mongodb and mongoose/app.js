const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("./models/User");

// derived from the mongodb atlas website / connect to application
const mongoUrI =
  "mongodb+srv://peter:hfouAQ79nQFVCwWf@cluster2.icw3kk1.mongodb.net/?retryWrites=true&w=majority";
// mongoose.set("setQuery", false);

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://peter:<password>@cluster2.icw3kk1.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// when it is connected , a callback function is being send to me,
// and I am adding that call back fuction  by which we can know that mondb is connected
// moongose take another argument,besides mongoUrI, which is {} known as options ..{} it is an object,
// inside options object ,needto add default values which is this { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

// to catch errors if possible , we use try catch block
// try {
//   mongoose.connect(
//     mongoUrI,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       //   serverApi: ServerApiVersion.v1,
//       useCreateIndex: true,
//       useFindAndModify: true,
//     },
//     () => {
//       console.log(`hello there!...  mongoose connected..awesome keep coding`);
//     }
//   );
// } catch (error) {
//   console.log(error);
// }

async function connecting() {
  try {
    mongoose.connect(
      mongoUrI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //   serverApi: ServerApiVersion.v1,
        useCreateIndex: true,
        useFindAndModify: true,
      },
      () => {
        console.log(`hello there!...  mongoose connected..awesome keep coding`);
      }
    );

    const savedUser = await user.save();
    console.log(`${savedUser} data saved `);
    return savedUser;
  } catch (error) {
    console.log(`error ${error}`);
  }
}

const user = new User({
  email: "shivam@gmail.com",
  password: "1234",
});

connecting().then((data) => {
  console.log(`connect...${data}`);
});

// const user = new User({
//   email: "shivam@gmail.com",
//   password: "1234",
//   //   age: 23, it will not saved or not be taken care of as age is not defined in the schema
// });
// user gets saved in actual mongodb database server
// .save is an  asynchronus function , as it goes through the internet, finds the resource,
//  where the connection is made and then adds onto that resource
// // .save is going to return a promise so adding then()

// user.save().then(
//   () => {
//     console.log(`user data saved and added`);
//     mongoose.connection.close();
//   },
//   (error) => {
//     console.log("unable to save");
//     console.log(error);
//   }
// );
// hfouAQ79nQFVCwWf

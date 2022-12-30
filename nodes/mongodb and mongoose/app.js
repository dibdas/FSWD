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
//       // useCreateIndex: true,
//       // useFindAndModify: true,
//     },
//     () => {
//       console.log(`hello there!...  mongoose connected..awesome keep coding`);
//     }
//   );
// } catch (error) {
//   console.log(error);
// }

// const user = new User({
//   email: "amit@gmail.com",
//   password: "123456",
// });

// user.save().then(
//   () => {
//     console.log(`user data saved and added`);
//     // mongoose.connection.close();
//   },
//   (error) => {
//     console.log("unable to save");
//     console.log(error);
//   }
// );

// always put the mogoose .connect inside a function
connecting();
function connecting() {
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
}

async function makeUser(newUser) {
  // const user = new User({
  // passing email and password as an argument
  // email: "sima@gmail.com",
  // password: "9234",
  // age: 23, it will not saved or not be taken care of as age is not defined in the schema
  // });

  // passing the email and password as an argument , so that it can be changed modified or
  //  user-defined outside the function

  const user = new User(newUser); // in memory user document created
  // without using await user can also be saved ,
  // it is just that without await no data will be returned
  // without await no data will be returned ,
  // use await when you would like to do something with data that being returned
  const savedUser = await user.save(); // user saved inside database
  console.log(`${savedUser} data saved `);
  console.log(`${user}`);
}
// age will not be taken care of as it is not defined in the schema
// makeUser({email: "petergmail.com",password: "peter9056",age: 87,marks: 53});

// modifying the schema using at the end , because 1000ms error and mongoose create models first then connection
// const user = new User({
//   email: "shivam@gmail.com",
//   password: "1234",
//   //   age: 23, it will not saved or not be taken care of as age is not defined in the schema
// });
// user gets saved in actual mongodb database server
// .save is an  asynchronus function , as it goes through the internet, finds the resource,
//  where the connection is made and then adds onto that resource
// // .save is going to return a promise so adding then()

const findUsers = async () => {
  // User is the model which we have imported
  // User.find() is an async function, so we have to wait for 1 or 2 seconds and
  // as it an async function it will return promise , so need to add await keyword
  const allUsers = await User.find();
  console.log(allUsers); //getting the desired data or document in an array
  console.log(`${allUsers}`); //getting the desired data or documents
};
// findUsers();

const findUsersById = async (number) => {
  const user = await User.findById(number);
  console.log(`ObjectId${user}`);
};
// findUsersById("63ada049fcf498a5eacea208");

const findUsersByEmail = async (email) => {
  // passing object inside find,and telling that find the documents on the basis of email
  // const user = await User.find({ email: "sima@gmail.com" });

  // when you are sure , that there is only one object need to be found,
  // or may be there is only one Object present that matches the criterea
  // finOne function will fetch or return the first document that matches the criterea,
  // even if other document matches the criterea, it wont return it or fetch it, findOne only
  // return or fetches the data or the document that matches the criterea
  // const user = await User.findOne({ email: "denver@gmail.com" });
  const user = await User.find({ email }); // destructuring happens here
  console.log(`by email:`, user); //getting the desired data or document in an array
  console.log(`${user}`); //getting the desired data or document
};
// findUsersByEmail();
// findUsersByEmail("amit@gmail.com");

const findUsersByMarks = async (number) => {
  // const user = await User.findOne({ marks: 53 });
  // getting marks above the number that is being passed as an argument
  // const user = await User.findOne({ marks: number });
  // return the first document or the data present in the database that matches with the condition
  // const user = await User.findOne({ marks: { $gt: 30 } });
  // return all the data or the documents that matches with the condition
  const user = await User.find({ marks: { $gt: 30 } });
  // const user = await User.find({ marks: { $gt: number } });
  console.log(`result ${user}`);
};
// findUsersByMarks(20);
// UsersByEmail("amit@gmail.com");

const findUsersByRegex = async () => {
  // regex is regular expression
  // it will return all the data or the documents which has de in their email
  // const user = await User.find({ email: { $regex: "de" } });
  const user = await User.find({ email: { $regex: "am" } });
  // const user = await User.find({ marks: { $gt: number } });
  console.log(`result ${user}`);
};
// findUsersByRegex();

const updateMarks = async (userId, marks) => {
  const user = await User.findById(userId);
  // updating the marks of the user, which has been fetched or returned
  user.marks = marks;
  // save() is an async function so it you have wait 1 or 2 seconds , therefore adding await
  const updatedResult = await user.save();
  console.log(updatedResult);
  return updatedResult;
};
// updateMarks("63ad2994bd1110c90ca3d218", 36);

const updateUserDetails = async (userId, newUser) => {
  const user = await User.findById(userId);

  user.marks = newUser.marks;
  user.email = newUser.email;

  const updatedResult = await user.save();
  console.log(updatedResult);
  return updatedResult;
};
// updateUserDetails("63ad2994bd1110c90ca3d218", {
//   email: "devkumar@gmail.com",
//   marks: 78,
// });

const deleteUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) return;
  console.log(`got user`);
  // as await is added so user.delete() will execute first then console.log will run
  // await user.delete()
  user.delete();
  // console.log(`user deleted`);
  // user.delete() as await is not  added so then console.log will run first, then use.delete() will execute
  // console.log(`user deleted`);
  // use await, when you would like to do with data that being returned after using delete() method
  // const data = await user.delete(); // use await when you want to see what being returned , and would like to do something about it
  console.log(`user deleted`);
  console.log(`user deleted ${user}`);
};
deleteUser("63adebe1a88e510b867e1e08");
// findUsers();

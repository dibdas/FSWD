const express = require("express");
const app = express();
// derived from the mongodb atlas website / connect to application

const mongoUrI = `mongodb+srv://dibdas:ZXCVasdf@08@cluster1.0mjgcsb.mongodb.net/?retryWrites=true&w=majority`;
const mongoose = require("mongoose");

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://dibdas:<password>@cluster1.0mjgcsb.mongodb.net/?retryWrites=true&w=majority";
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
try {
  mongoose.connect(
    mongoUrI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   serverApi: ServerApiVersion.v1,
    },
    () => {
      console.log(`hello there!...  mongoose connected..awesome keep coding`);
    }
  );
} catch (error) {
  console.log(error);
}

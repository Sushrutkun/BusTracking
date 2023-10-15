// import mongoose from 'mongoose';


import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/netflixsandy";
const connectToDB = async () => {
  try {
    await mongoose.connect(mongoUri, { 
      // @ts-expect-error
      useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
            console.log("Connected to DB")
        })

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
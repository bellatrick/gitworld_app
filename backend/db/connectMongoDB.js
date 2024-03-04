import mongoose from "mongoose";

export default async function connectMongoDB() {
  try {
    console.log('Connecting to mongodb...')
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongo db");
  } catch (error) {
    console.log("Error connecting",error);
  }
}

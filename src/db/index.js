import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connection successful || DB_HOST`,
      connectionInstance.connection.host
    );
    console.log(`connectionInstance: ${connectionInstance}`);
  } catch (error) {
    console.log("MongoDB connection failed: ", error);
    process.exit(1);
  }
};

export default connectDB
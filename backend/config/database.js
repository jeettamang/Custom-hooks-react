import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/file");
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Failed to connect DB");
  }
};

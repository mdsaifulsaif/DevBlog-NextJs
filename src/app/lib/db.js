import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log(" MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI); // simple connect
    isConnected = true;
    console.log(" MongoDB connected");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    throw error;
  }
};

import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "Store_Admin",
      connectTimeoutMS: 30000,  // Tăng thời gian timeout cho kết nối (30 giây)
      socketTimeoutMS: 45000,   // Tăng thời gian timeout cho socket (45 giây)
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
}
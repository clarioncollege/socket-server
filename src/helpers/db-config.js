const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config");

const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = { connectDb };

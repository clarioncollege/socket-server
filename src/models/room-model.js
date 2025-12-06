const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

/**
 * Create multiple rooms in the database
 * @param {Array} rooms - Array of room objects to be created
 */
const createRooms = async (rooms) => {
  try {
    const roomsExist = await Room.find({});

    if (roomsExist.length > 0) {
      return console.log("Rooms already exist in the database");
    }

    await Room.insertMany(rooms);
    console.log("Rooms created successfully");
  } catch (error) {
    console.error("Error creating rooms:", error);
  }
};

/**
 * Get all rooms from the database
 * @return {Array} - Array of room objects
 */
const getAllRooms = async () => {
  try {
    const rooms = await Room.find({});
    return rooms;
  } catch (error) {
    console.error("Error getting rooms:", error);
  }
};

module.exports = { createRooms, getAllRooms };

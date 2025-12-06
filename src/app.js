const express = require("express");
const cors = require("cors");
const { getAllRooms } = require("./models/room-model");
const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json());

/**
 * Server Health Check
 */
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.get("/rooms", async (req, res) => {
  const rooms = await getAllRooms();
  res.json(rooms);
});

module.exports = app;

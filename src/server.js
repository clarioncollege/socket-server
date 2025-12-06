const http = require("http");
const app = require("./app");
const { connectDb } = require("./helpers/db-config");
const { createRooms } = require("./models/room-model");
const rooms = require("./lib/rooms");
const { PORT } = require("./config");

const httpServer = http.createServer(app);

const startServer = async () => {
  await connectDb();
  await createRooms(rooms);
  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();

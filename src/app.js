const express = require("express");
const app = express();

/**
 * Server Health Check
 */
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

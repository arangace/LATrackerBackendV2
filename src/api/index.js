const app = require("express")();
const { v4 } = require("uuid");

app.get("/api", (req, res) => {
  return res.send("users 🏓");
});

module.exports = app;

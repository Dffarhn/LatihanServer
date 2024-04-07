const { Router } = require("express");

const route = Router();

const sapa = (req, res) => {
  res.send("halo guys disapa");
};

const salam = (req, res) => {};

route.get("/sapa", sapa);
// Define a route handler for the root path
route.get("/", (req, res) => {
  res.send("dapa rehann mengganti dapa ganteng betul!");
});

// Start the server

module.exports = route

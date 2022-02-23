const express = require("express");
const usersRouter = express.Router();

// NEW
const { getAllUsers } = require("../db");

// UPDATE
usersRouter.get("/", async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users,
  });
});

module.exports = usersRouter;

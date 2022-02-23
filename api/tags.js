const express = require("express");
const tagsRouter = express.Router();

// NEW
const { getAllTags } = require("../db");

// UPDATE
tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags,
  });
});

module.exports = tagsRouter;

const express = require("express");
const router = express.Router();

router.get("/greeting", async (req, res) => {
  res.status(200).send("Hello world!");
});

router.post("/add", async (req, res) => {
  // write your code here...
  res.status(200).send("");
});

router.post("/subtract", async (req, res) => {
  // write your code here...
  res.status(200).send("");
});

module.exports = router;

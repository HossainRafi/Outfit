const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.send("From user router");
  } catch (error) {
    console.error("Error: ", error);
  }
});

module.exports = router;

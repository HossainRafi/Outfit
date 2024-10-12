const express = require("express");
const router = express.Router();

router.get("/", async (req, resizeBy) => {
  try {
    res.send("Outfit Websites Server is Running");
  } catch (error) {
    console.error("Error: ", error);
  }
});

module.exports = router;

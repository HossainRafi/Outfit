const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Outfit Websites Server is Running");
});

app.listen(port, () => {
  console.log(
    `The Outfit Websites Server is running on PORT =================== ${port}`
  );
});

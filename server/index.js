const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

async function main() {
  await mongoose.connect(process.env.DB_URL);
}
main()
  .then(() =>
    console.log(
      "MongoDB Connected Successfully=================================== !!!!"
    )
  )
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Outfit Websites Server is Running");
});

app.listen(port, () => {
  console.log(
    `The Outfit Websites Server is running on PORT =================== ${port}`
  );
});

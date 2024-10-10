const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// hossainrafi71;
// SkZurglfGOv7oUeP;

async function main() {
  await mongoose.connect(
    "mongodb+srv://hossainrafi71:SkZurglfGOv7oUeP@outfit.at2dm.mongodb.net/?retryWrites=true&w=majority&appName=Outfit"
  );
}
main()
  .then(() =>
    console.log("MongoDB Connected Successfully=================================== !!!!")
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

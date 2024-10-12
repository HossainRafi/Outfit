const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const cors = require("cors");

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://localhost:5173",
    credentials: true,
  })
);

// routes
const userRoutes = require("./src/users/user.route");

app.use("/api/auth", userRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("Outfit Websites Server is Running");
  });
}
main()
  .then(() =>
    console.log(
      "MongoDB Connected Successfully=============================== !!!!"
    )
  )
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(
    `Outfit Websites Server is running on PORT =================== ${port}`
  );
});

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/routes");

const mongo = process.env.DATABASE_URL;
const app = express();

mongoose.connect(mongo);
const database = mongoose.connection;

database.on("error", (error) => {
  console.error(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

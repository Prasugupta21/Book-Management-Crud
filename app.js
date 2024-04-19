require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./connection/db");
const Books = require("./routes/books");
const cors = require("cors");
connectDB();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", Books);

const PORT = process.env.PORT;

//request

app.get("/", (req, res) => {
  res.send("It is main page");
});

app.listen(PORT, function () {
  console.log("app started on port 8000");
});

const express = require("express");
const connectDB = require("./config/database");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true, limit: "1mb" }));
app.use(bodyParser.json());

// Connect Database
connectDB();

// Routes
app.use("/post", require("./routes/post"));

// Default route
app.get("/", (req, res) => res.send("API Running"));

module.exports = app;

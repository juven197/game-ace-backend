const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");

const app = express();

const cartRouter = require("./routes/cart/cart.router");

// if you want cors, you can add here

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers (IE11, various SmartTVs) choke on 204

// for morgan
var dir = path.join(__dirname, "..", "logs"); // you can edit it

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "logs", "access.txt"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.json());

// Middleware to parse URL-encoded bodies. Important!
app.use(express.urlencoded({ extended: true }));

app.use("/cart", cartRouter.cartRouter);

module.exports = app;

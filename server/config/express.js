const express = require("express");
const path = require("path");
const config = require("./config");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("../routes");

const app = express();
//Set up logger
if (config.env == "development") {
  app.use(logger("dev"));
}

//get dist foler
const distDir = path.join(__dirname, "../../dist");

//use dist folder by express
app.use(express.static(distDir));

// parsinf from api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//secure app https://
app.use(helmet());

//allow cors
app.use(cors());

//api router
app.use("/api/", routes);

//serve the index.html
app.get("*", (req, res) => res.sendFile(path.join(distDir, "index.html")));

module.exports = app;

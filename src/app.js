const express = require("express");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes/index.routes");

const app = express();

// settings
app.set("port", 3001);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// middlewares
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/", routes);
// 404
app.use("*", (req, res) => res.render("404"));

module.exports = app;

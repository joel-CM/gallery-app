const { Router } = require("express");

const app = Router();

app.get("/", (req, res) => {
  res.render("contact", { appName: "Gallery App" });
});

module.exports = app;

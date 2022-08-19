const { Router } = require("express");
const app = Router();
const db = require("../db");

app.get("/", (req, res) => {
  const query = "select * from images;";
  db.query(query, (err, result) => {
    if (err) throw err;
    res.render("index", { appName: "Gallery App", imgs: result });
  });
});

module.exports = app;

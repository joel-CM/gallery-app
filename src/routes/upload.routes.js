const { Router } = require("express");
const path = require("path");
const sharp = require("sharp");
const upload = require("../middlewares/upload");
const db = require("../db");

const app = Router();

app.post("/", upload.single("image"), (req, res) => {
  const file = req.file;
  try {
    sharp(file.path)
      .resize(200, 250)
      .toFile(
        path.join(__dirname, `../../public/optimize/optimize-${file.filename}`)
      );
  } catch (error) {
    console.log(error);
  }

  const prepare = "insert into images (type, name) values (?,?)";
  const query = db.format(prepare, [file.mimetype, file.filename]);
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = app;

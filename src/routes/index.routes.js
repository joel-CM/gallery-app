const { Router } = require("express");
const homeRoutes = require("./home.routes");
const contactRoutes = require("./contact.routes");
const uploadRoutes = require("./upload.routes");

const app = Router();

app.use("/", homeRoutes);
app.use("/contact", contactRoutes);
app.use("/api/upload", uploadRoutes);

module.exports = app;

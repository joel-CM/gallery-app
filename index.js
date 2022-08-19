const app = require("./src/app");

// start server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});

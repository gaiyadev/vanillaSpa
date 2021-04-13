var livereload = require("livereload");
const express = require("express");
const path = require("path");

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
var server = livereload.createServer();
server.watch(__dirname + "/frontend", "index.html");
const PORT = 4000;
app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running...${PORT}`)
);

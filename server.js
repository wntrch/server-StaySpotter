const express = require("express");
const morgan = require("morgan");
// const searchRouter = require("./routes/searchRouter");
// const homePageRouter = require("./routes/homePageRouter");
// const listingsRouter = require("./routes/listingsRouter");
// const contactRouter = require("./routes/contactRouter");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use(morgan("dev"));

app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

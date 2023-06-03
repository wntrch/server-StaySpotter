const express = require("express");
const homePageRouter = express.Router();

homePageRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will display the listings to you");
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on the HomePage");
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on HomePage");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on HomePage");
  });

module.exports = homePageRouter;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const apiRouter = require("./routers/apiRouter.js");

app.use(bodyParser.json());

app.use("/api", apiRouter);

module.exports = app;

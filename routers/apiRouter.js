const apiRouter = require("express").Router();

apiRouter.get("/", (req, res) => {
  res.status(200).send("Success");
});

module.exports = apiRouter;

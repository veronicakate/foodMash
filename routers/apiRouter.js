const apiRouter = require("express").Router();
const {getImageInfo} = require('../controllers/controller.js');


apiRouter.post("/", getImageInfo)

// apiRouter.use('/', getImageInfo)


module.exports = apiRouter;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const apiRouter = require("./routers/apiRouter.js");

app.use(bodyParser.json());

app.set('view engine', 'ejs');

// app.get('/api', (req, res)=> {
//     res.status(200).render('views')
// });

app.use("/api", apiRouter);

module.exports = app;

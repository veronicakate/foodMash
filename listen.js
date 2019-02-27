const express = require("express");
const app = require("./app");
const port = 9090;

app.listen(port, () => console.log(`Server running on ${port}`));

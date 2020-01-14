const express = require("express");

const app = express();

app.use(require("./subrouters/main"));
app.use(require('./subrouters/databasing'))

app.listen(3000);

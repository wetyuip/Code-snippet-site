const express = require("express");

const app = express();

app.use(require("./subrouters/main"));

app.listen(3000);

const express = require("express");
const path = require("path");

var router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.resolve("./public/html/index.html"));
});

router.use(express.static(path.resolve("./public/css")));
router.use(express.static(path.resolve("./public/js")));

module.exports = router;

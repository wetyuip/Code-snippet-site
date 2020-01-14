const express = require("express");
const sql = require("sqlite3");
const path = require("path");

var router = express.Router();
var db = new sql.Database();

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS snippets (content TEXT, language TEXT, author TEXT, timestamp INTEGER)"
  );
  db.run("CREATE INDEX language ON snippets (language)");

  db.addSnippet = db.prepare("INSERT INTO snippets (?,?,?,?)");
});

router.get("/api/submit", (req, res, next) => {
  let info = JSON.parse(req.body);
  db.addSnippet.run(info.content, info.language, info.author, info.timestamp);
});

module.exports = router;

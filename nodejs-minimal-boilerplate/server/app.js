import fs from "fs";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use("/static/", express.static(__dirname + "/../static/"));

// Json parsing
app.use(bodyParser.json());

app.get("/", function(req, res) {
  const content = fs.readFileSync(`${__dirname}/../view/index.html`);
  res.set("Content-Type", "text/html");
  res.send(content.toString());
});

app.get("/minesweeper", function(req, res) {
  const content = fs.readFileSync(`${__dirname}/../view/games/minesweeper.html`);
  res.set("Content-Type", "text/html");
  res.send(content.toString());
});

module.exports = app;

"use strict";

var fs = require("fs");
var path = require("path");
var logsDir = path.join(__dirname, "Logs");
if (fs.existsSync(logsDir)) {
  var files = fs.readdirSync(logsDir);
  for (var i = 0; i < files.length; i++) {
    var fileName = files[i];
    var filePath = path.join(logsDir, fileName);
    fs.unlinkSync(filePath);
    console.log("Deleted file:", fileName);
  }
  fs.rmdirSync(logsDir);
  console.log("Removed directory:", logsDir);
} else {
  console.log("Nothing to remove — Logs folder does not exist.");
}

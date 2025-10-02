"use strict";

var fs = require("fs");
var path = require("path");
var logsDir = path.join(__dirname, "Logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log("Created directory:", logsDir);
} else {
  console.log("Directory already exists:", logsDir);
}
process.chdir(logsDir);
for (var i = 0; i < 10; i++) {
  var fileName = "log" + i + ".txt";
  var content = "This is " + fileName + " created at " + new Date().toISOString() + "\n";
  fs.writeFileSync(fileName, content);
  console.log("Created file:", fileName);
}

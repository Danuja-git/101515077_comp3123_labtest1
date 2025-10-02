"use strict";
function lowerCaseWords(input) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(input)) {
      reject(new Error("Input must be an array"));
      return;
    }
    var onlyStrings = [];
    for (var i = 0; i < input.length; i++) {
      var value = input[i];
      if (typeof value === "string") {
        onlyStrings.push(value);
      }
    }
    if (onlyStrings.length === 0) {
      reject(new Error("No strings found in the array"));
      return;
    }
    var result = [];
    for (var j = 0; j < onlyStrings.length; j++) {
      var lowered = onlyStrings[j].toLowerCase();
      result.push(lowered);
    }
    resolve(result);
  });
}

var mixed = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixed)
  .then(function (data) {
    console.log("Result:", data);
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  });



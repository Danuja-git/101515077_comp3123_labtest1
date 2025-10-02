"use strict";
const delayedSuccess = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("delayed success!");
    }, 500);
  });
};
const delayedException = function () {
  return new Promise(function (_resolve, reject) {
    setTimeout(function () {
      reject(new Error("delayed exception!"));
    }, 500);
  });
};
delayedSuccess()
  .then(function (msg) {
    console.log(msg); 
  })
  .catch(function (_err) {
  });
delayedException()
  .then(function (_msg) {
  })
  .catch(function (err) {
    console.log({ message: err.message }, { error: err });
  });
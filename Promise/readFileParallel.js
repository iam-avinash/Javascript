const { isUtf8 } = require("buffer");
const { error } = require("console");
let fs = require("fs");

let f1Promise = fs.promises.readFile("f1.txt", "utf-8");

f1Promise
  .then((data) => {
    console.log(data);
    return fs.promises.readFile("f2.txt", "utf-8");
  })
  .then((data) => {
    console.log(data);
    return fs.promises.readFile("f3.txt", "utf-8");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

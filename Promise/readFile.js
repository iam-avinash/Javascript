const { error } = require("console");
let fs = require("fs");
// Read File Using Promisify

let f1Promise = fs.promises.readFile("f1.txt");
// console.log(f1Promise);

f1Promise
  .then((data) => {
    console.log(data + "");
  })
  .catch((error) => {
    console.log(error);
  });

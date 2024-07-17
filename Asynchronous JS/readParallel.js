let fs = require("fs");

// readFile("f1.txt", function cb(error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Data of the file " + data);
//   }
// });

// readFile("f2.txt", function cb1(error, data) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("Data of the file " + data);
//   }
// });

fs.readFile("f1.txt", function cb(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("Data of the file " + data);
    fs.readFile("f2.txt", function cb1(error, data) {
      if (error) {
        console.error(error);
      } else {
        console.log("Data of the file " + data);
      }
    });
  }
});

console.log("second");

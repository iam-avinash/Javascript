let fs = require("fs");

async function gxn() {
  let f1Data = await fs.promises.readFile("f1.txt", "utf-8");
  console.log(f1Data);
  console.log(0);
}
console.log(1);
gxn();
console.log(2);

let A = new Set([1, 2, 3, 4, 5]);

let B = new Set([6, 7, 8, 9]);

console.log(A.union(B));

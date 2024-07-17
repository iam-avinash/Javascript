// function fxn() {
//   let d = 50;
//   console.log(d);
// }
// fxn();

// let a = 10;
// console.log(a);
// let b = 20;
// console.log(b);

//HOF and Call back
// function fxn(cb) {
//   console.log("I am HOF");
//   cb();
// }

// function gxn() {
//   console.log("I am Call back");
// }
// fxn(gxn);

console.log("1");
setTimeout(function task() {
  console.log("2");
}, 4444);
setTimeout(function cb() {
  console.log("2");
}, 4444);
console.log("3");

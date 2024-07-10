// console.log(this);
// function fxn() {
//   console.log(this);
// }
// fxn(); // Direct function Invocation

let obj = {
  name: "Anoop",
  age: "26",
  sayHello: function () {
    // console.log(this);
    function gxn() {
      console.log(globalThis);
    }
    gxn();
  },
};

obj.sayHello();
let sayHello1 = obj.sayHello;
sayHello1();

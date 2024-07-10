"use strict";

// console.log(this);

function fxn() {
  function gxn() {
    console.log(this);
  }
  gxn();
}
fxn(); // Direct function Invocation

let obj = {
  name: "Anoop",
  age: "26",
  sayHello: function () {
    console.log(this);
  },
};

obj.sayHello(); // Method function Invocation
let sayHello1 = obj.sayHello;
sayHello1();

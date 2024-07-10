// console.log(this);

// function fxn() {
//   console.log(globalThis);
// }
// fxn(); // Direct function Invocation

let obj = {
  name: "Anoop",
  age: "26",
  sayHello: function () {
    console.log(this);
    return this.name + " " + this.age;
  },
};

obj.sayHello(); // Method function Invocation
console.log("person Name and age is", obj.sayHello());
console.log(obj.name);

let sayHello1 = obj.sayHello;
console.log(sayHello1);
sayHello1();

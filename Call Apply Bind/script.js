// function car(name, color) {
//   this.name = name;
//   this.color = color;
// }
// car.prototype.getDetails = function () {
//   console.log("My car is " + this.name + " and color is " + this.color);
// };
// let carObj = new car("BMW", "Red");
// console.log(carObj);
// carObj.getDetails();

// let carObj2 = new car("Audi", "Black");
// console.log(carObj2);
// carObj2.getDetails();

// Call Method
// let person1 = {
//   name: "Anoop",
//   age: "26",
//   sayHello: function (batch1, batch2, batch3) {
//     this.batch1 = batch1;
//     this.batch2 = batch2;
//     this.batch3 = batch3;
//     console.log("Value of this is ", this);
//   },
// };

// person1.sayHello("july", "Aug");

// let person2 = {
//   name: "Pavan",
//   age: "28",
// };
// person1.sayHello.call(person2, "May", "June");

// person2.prototype;
// let person3 = {
//   name: "Rahul",
//   age: "28",
// };

// person1.sayHello.call(person3, "Jan", "Feb");

// Apply Method
// let person1 = {
//   name: "Anoop",
//   age: "26",
//   sayHello: function (batch1, batch2, batch3) {
//     this.batch1 = batch1;
//     this.batch2 = batch2;
//     this.batch3 = batch3;
//     console.log("Value of this is ", this);
//   },
// };

// // person1.sayHello("july", "Aug");
// let batch = ["july", "Aug", "may"];
// let person2 = {
//   name: "Pavan",
//   age: "28",
// };
// person1.sayHello.apply(person2, batch);

// let person3 = {
//   name: "Rahul",
//   age: "28",
//   getDetails: function (details) {
//     this.details = details;
//     console.log("This are details");
//     console.log("Value of this is ", this);
//   },
// };

// let info = ["No Details"];

// person1.sayHello.apply(person3, batch);
// person3.getDetails.apply(person1, info);

// Bind Method

let person1 = {
  name: "Anoop",
  age: "26",
  sayHello: function (batch1, batch2, batch3) {
    this.batch1 = batch1;
    this.batch2 = batch2;
    this.batch3 = batch3;
    console.log("Value of this is ", this);
  },
};
person1.sayHello("july", "Aug", "Jan");
let person2 = {
  name: "Pavan",
  age: "28",
};

let sayHelloToPerson2 = person1.sayHello.bind(person2);
sayHelloToPerson2("july", "Aug", "may");

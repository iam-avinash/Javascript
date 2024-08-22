// let firstVar = "created using let";
// var secondVar = "created using var";

// let obj = {
//   name: "Avinash",
//   age: "24",
//   sayHi: function () {
//     console.log(this.name + " " + this.age);
//   },
// };

// function isEvenOdd(num) {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// // // let num = 4;
// // // isEvenOdd(num);

// // function isOdd(number) {
// //   return number % 2 !== 0;
// // }

// // console.log(isOdd(5));

// console.log(isEvenOdd(5));

// function print(callback) {
//   console.log("I am Function");

//   callback();
// }

// function sayHello() {
//   console.log("I am Call back Function");
// }

// print(sayHello);

// let btn = document
//   .querySelector("#callback-btn")
//   .addEventListener("click", function () {
//     console.log("Callback button is clicked");
//   });

// function exclaim(callback) {
//   callback();
// }

// const exclaim = (str) => `${str}!`;

// exclaim("Adrian");
// exclaim(exclaim("Adrian"));

// function printName(cb) {
//   console.log("Shikhar");
//   // calling received callback function
//   cb();
// }
// function printLastName() {
//   console.log("Singh");
// }
// function printAge() {
//   console.log(24);
// }
// printName(printLastName);
// printName(printAge);

// function printName(cb1, cb2, cb3) {
//   cb1();
//   cb2();
//   cb3();
// }

// function first() {
//   console.log("I am");
// }

// function second() {
//   console.log("a");
// }

// function third() {
//   console.log("call back");
// }

// printName(first, second, third);

// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
// const inrtToUsd = 80;

// const convertedAmount = transactions.map(function (amount) {
//   return amount / inrtToUsd;
// });

// console.log(convertedAmount);

// const positiveAmount = transactions
//   .filter(function (amount) {
//     return amount > 0;
//   })
//   .map(function (amount) {
//     return amount / inrtToUsd;
//   });

// console.log(positiveAmount);

// let totalAmount = transactions.reduce(function (acc, num) {
//   acc = acc + num;
//   return acc;
// });

// console.log(totalAmount);

// Polyfill for Map

// Inbuilt Map Function
// let squreArr = arr.map(function (num) {
//   return num * num;
// });

// console.log(squreArr);

// Polyfill

// Array.prototype.myMap = function (callback) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp[i] = callback(this[i] * this[i]);
//   }
//   return temp;
// };

// let square = arr.myMap(function (num) {
//   return num;
// });

// console.log(square);

// polyfill for filter

// Array.prototype.myFilter = function (callback) {
//   let temp = [];
//   let len = this.length;
//   for (let i = 0; i < len; i++) {
//     if (callback(this[i])) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// let evenValue = arr.myFilter(function (ele) {
//   return ele % 2 == 0;
// });

// console.log(evenValue);

// for (i in arr) {
// }

// reduce Polyfill

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array.prototype.myReduce = function (callback, initial_value) {
//   let result = initial_value;
//   // let startIndex;
//   // if (initial_value) {
//   //   result = initial_value;
//   //   startIndex = 0;
//   // } else {
//   //   result = this[0];
//   //   startIndex = 1;

//   for (let i = 0; i < this.length; i++) {
//     result = callback(result, this[i]);
//   }
//   return result;
// };

// let sum = arr.myReduce(function (acc, currentValue) {
//   return acc + currentValue;
// }, 0);

// console.log(sum);

// Array.prototype.customMap = function (callback) {
//   let result = [];
//   let len = this.length;
//   for (let i = 0; i < len; i++) {
//     result.push(callback(this[i]));
//   }
//   return result;
// };

// let square = arr.customMap(function (ele) {
//   return ele * ele;
// });

// Array.prototype.customFilter = function (callback) {
//   let result = [];
//   let length = this.length;

//   for (let i = 0; i < length; i++) {
//     if (callback(this[i])) {
//       result.push(this[i]);
//     }
//   }

//   return result;
// };

// console.log(square);

// let evenNumber = arr.customFilter(function (ele) {
//   return ele % 2 == 0;
// });

// console.log(evenNumber);

// api Call

// function squre(ele) {
//   console.log(ele * ele);
// }

// let squreRoot = arr.forEach(squre);

// console.log(squreRoot);
// var numbers = [6, 7, 8, 9, 10];
// Array.prototype.customReduce = function (callback, initialValue) {
//   let accumulator;
//   let firstIndex;
//   //We will get only the callback param,in this case we know initialValue is not pass and
//   //Here we will set the accumulator to be with the first item and set firstIndex to be 1
//   if (arguments.length === 1) {
//     accumulator = this[0];
//     firstIndex = 1;
//   }
//   //Here we will get both callback and initialValue
//   //In this case we set the accumulator to initialValue and firstIndex to be 0
//   else {
//     accumulator = initialValue;
//     firstIndex = 0;
//   }
//   //Here we will iterate on each item in the array (depend what we set for the firstIndex)
//   //and each time we keep the new accumulator
//   for (let index = firstIndex; index < this.length; index++) {
//     accumulator = callback(accumulator, this[index], index);
//   }
//   //when iteration is done we return the accumulator
//   return accumulator;
// };
// console.log(numbers.customReduce((total, num) => total + num, 0));

// this key word

// function car(name, color, build_year) {
//   (this.name = name),
//     (this.color = color),
//     (this.year = build_year),
//     (this.drive = function () {
//       console.log(
//         `I am driving ${this.name} and its color is ${this.color} and it was build in ${this.year}`
//       );
//     });
// }

// // car();
// let car1 = new car("audi", "red", "2024");

// car1.drive();

// class student {
//   constructor(name_of_student, age, batch_code) {
//     this.name = name_of_student;
//     this.age = age;
//     this.batchCode = batch_code;
//   }

//   greet() {
//     console.log(
//       `Hello my name is ${this.name} and i am ${this.age} Year old and i am from ${this.batchCode} batch`
//     );
//   }
// }

// const student1 = new student("Rahul", "26", "AVZP221");

// student1.greet();

// class teacher extends student {
//   constructor(name, age, batch_code, batch_size) {
//     super(name, age, batch_code);
//     this.batchSize = batch_size;
//   }
//   teacherBatch() {
//     console.log(`i am teacher and my name is ${this.name} and my age is ${this.age}. Also i am teaching batch ${this.batchCode} and batch size is ${this.batchSize}
//       `);
//   }
// }

// const teacher1 = new teacher("Pavan", 40, "AWERQ133", 40);

// teacher1.teacherBatch();

// class parent {
//   constructor(child_name, child_age) {
//     this.name = child_name;
//     this.age = child_age;
//   }

//   child() {
//     console.log(`Hi, My name is ${this.name} and my age is ${this.age}`);
//   }
// }

// let child1 = new parent("Rahul", "23");
// child1.child();
// console.log(child1);

// function car(name, age, color) {
//   this.name = name;
//   this.age = age;
//   this.color = color;
// }

// car.prototype.carInfo = function () {
//   console.log(`It's a ${this.name} and of ${this.color} color`);
// };

// let car1 = new car("BMW", "20", "red");
// console.log(car1);
// car1.carInfo();

// Call Method

// function Car(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Car.prototype.drive = function () {
//   console.log(`${this.name} is driving`);
//   console.log(`car is of the ${this.color} color`);
// };

// let car1 = new Car("Pavan", "red");

// console.log(car1);
// console.log(car1.hasOwnProperty("XYZ"));

// console.log(car1.hasOwnProperty("name"));

// car1.drive();

// let person1 = {
//   name: "Tharun",
//   age: "No idea",
//   sayHello: function (batch1, batch2, batch3) {
//     this.batch1 = batch1;
//     this.batch2 = batch2;
//     //this.batch3 = batch3;
//     console.log("Value of this keyword ", this);
//   },
// };

// person1.sayHello("July Batch", "Dec Batch");

// let person2 = {
//   name: "Aman",
//   age: "25",
// };

// person1.sayHello = function () {
//   console.log("value of this keyword", this);
// };

// person1.sayHello.call(person2);

// person1.sayHello.call(person2, "July Batch", "Dec Batch");
// let batches = ["June Batch", "July Batch", "Dec Batch"];
// person1.sayHello.call(person2, batches[0], batches[1], batches[2]);

// let person1 = {
//   fName: "Avinash",
//   lName: "Borse",
//   sayHello: function (batch1, batch2, batch3) {
//     // console.log(`Hi i my name is ${this.fName}`);
//     // console.log(`my email address is ${this.fName}.${this.lName}@gmail.com`);
//     this.batch1 = batch1;
//     this.batch2 = batch2;
//     this.batch3 = batch3;
//     console.log("value of this keyword", this);
//     console.log(`my batch is ${this.batch1}`);
//   },
// };

// // person1.sayHello("june", "april");

// let person2 = {
//   fName: "Rahul",
//   lName: "patil",
//   // lastName: function () {
//   //   console.log(`my last name is ${this.lName}`);
//   // },
// };

// let batches = ["mar", "july", "Sep"];

// let batch12 = "mar";

// // person1.sayHello.call(person2, "may", "jan");

// // person1.sayHello.apply(person2, batches);

// let newHello = person1.sayHello.bind(person2);

// newHello(batch12, "may", "june");

// Polyfill for call

let car = {
  name: "Mercedes",
  color: "White",
};

// let price = ["10000"];

// console.log(price.toString());

function buyCar(price) {
  console.log(`I bought a ${this.color} ${this.name} for ${price}`);
}

// const { promises } = require("dns");
// buyCar.call(car, 10000);

// Function.prototype.myCall = function (obj, ...arg) {
//   // console.log(this);
//   // console.log(obj);
//   // obj.fxn = this;

//   obj.fxn = this;
//   obj.fxn(...arg);
// };

// buyCar.myCall(car, 100000);

// Function.prototype.myApply = function (obj, arg) {
//   obj.fxn = this;
//   obj.fxn(...arg);
// };

// Function.prototype.myBind = function (obj, ...arg) {
//   obj.fxn = this;
//   return function (...arg2) {
//     return obj.fxn(...arg, ...arg2);
//   };
// };

// let bindFxn = buyCar.myBind(car, 20000);

// bindFxn();

// let fs = require("fs");

let textData =
  "I've been trying to find a way to write to a file when using Node.js, but with no success. How can I do that?";

// let f1txt = fs.readFileSync("f1.txt");
// console.log(f1txt + "");

// UsingFS
// fs.readFile("f1.txt", function cb1(error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data + "");
//     fs.readFile("f2.txt", function cb2(error, data) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(data + "");
//         fs.writeFile("f3.txt", textData, function cb3(error, data) {
//           if (error) {
//             console.log(error);
//           } else {
//             console.log("file is updated ");
//           }
//         });
//       }
//     });
//   }
// });

// Using promise

// let f1Promise = fs.promises.readFile("f1.txt");

// console.log(f1Promise);
// console.log("hello");

// f1Promise.then(function (data) {
//   try {
//     console.log(data + "");
//   } catch (error) {
//     console.log(error);
//   }
// });

// f1Promise
//   .then(function (data) {
//     console.log(data + "");
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// let myPromise = new Promise(function (resolve, reject) {
//   const a = 10;
//   const b = 20;
//   if (a === b) {
//     resolve("yes they are equal");
//   } else {
//     reject("they are not equal");
//   }
// });

// myPromise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// let fs = require("fs");

// let f1Promise = fs.promises.readFile("f1.txt");

// Promise Chaining
// f1Promise
//   .then(function (data) {
//     console.log(data + "");
//     return fs.promises.readFile("f2.txt");
//   })
//   .then(function (data) {
//     console.log(data + "");
//     return fs.promises.appendFile("f4.txt", "hello this is file 4");
//   })
//   .then(function (error) {
//     if (error) {
//       throw error;
//     }
//     console.log("file created");
//   });

//

// async function gxn() {
//   let f1File = await fs.promises.readFile("f1.txt");
//   console.log(4);
//   console.log(f1File + "");
// }

// gxn();
// let body1 = document.querySelector("body");

// async function updateText() {
//   let myPromise = new Promise((resolve, reject) => {
//     resolve("I love you ");
//   });

//   let newDiv = document.createElement("div");
//   let text = await myPromise;
//   newDiv.innerHTML = text;
//   body1.appendChild(newDiv);
// }

// // async function updateText() {
// //   let myPromise = new Promise((resolve, reject) => {
// //     resolve("I love you ");
// //   });

// //   // 1. Create the div element
// //   let newDiv = document.createElement("div");

// //   // 2. Wait for the promise to resolve and set the innerHTML
// //   const text = await myPromise;
// //   newDiv.innerHTML = text;

// //   // 3. Append the div to the body
// //   body1.appendChild(newDiv);
// // }

// updateText()

//Build Your Own JSON Parser

let student = [
  { name: "Smith", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "John", rollNumber: 16, marks: 35 },
  { name: "Tiger", rollNumber: 7, marks: 55 },
];

let studentFil = student.filter(function (num) {
  return num.marks >= 80;
});

console.log(studentFil);

let name = studentFil.map(function (name) {
  return name.name;
});

console.log(name);

// Q1. Given an array of objects users, print fullname.

const users = [
  { firstName: "john", lastName: "Biden", age: 26 },
  { firstName: "jimmy", lastName: "cob", age: 75 },
  { firstName: "sam", lastName: "lewis", age: 50 },
  { firstName: "Ronald", lastName: "Mathew", age: 26 },
];

let fullName = users.map(function (userName) {
  return `${userName.firstName} ${userName.lastName}`;
});
console.log(fullName);

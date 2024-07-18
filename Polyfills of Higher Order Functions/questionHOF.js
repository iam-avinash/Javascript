// Q. Print Initials from following input

const input = "Anoop Rahul Pavan Nitin";

// let inputArray = input.split(" ");
// console.log(inputArray);

// let output = inputArray.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue[0];
// }, "");

// let output = input
//   .split(" ")
//   .map(function (ele) {
//     return ele[0];
//   })
//   .join("");

// console.log(output);

const userData = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
  },
];

let output = userData.filter(function (ele) {
  return ele.age;
});

console.log(output);

// Primitive

// let a = 10;
// let b = 20;
// b = a; // b = 20; a=10;
// b = 30; // b= 30; a= 10;

// console.log(a);
// console.log(b);

// Reference

let obj1 = {
  name: "Anoop",
};
let obj3 = {
  name: "Pavan",
};

let obj2 = obj1;

obj2.name = "Rahul";
obj2 = obj3;
obj3.name = "Avinash";

console.log(obj1);

console.log(obj2);

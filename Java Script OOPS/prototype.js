// let obj = { name: "anopp", age: "20" };
// console.log(obj);

function Person(name, age) {
  {
    this.name = name;
    this.age = age;
  }
}

Person.prototype.details = function () {
  console.log(`My name is ${this.name} and my age is ${this.age}`);
};

let person1 = new Person("Avinash", "30");
console.log(person1);

let person2 = new Person("Pavan", "30");
console.log(person2);
Person.prototype.hasOwnProperty = "hahaha";
person1.details();
console.log(person1.hasOwnProperty);

function ElectricCar(name, age, batteryType) {
  Person.call(name, age);
  this.batteryType = batteryType;
}

ElectricCar.prototype = Object.create(Person.prototype);

let car1 = new ElectricCar("BMW", "30", "Litihum ion");
console.log(car1);

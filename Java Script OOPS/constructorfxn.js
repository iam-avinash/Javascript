// let carBmw = {
//     name:"BMW",
//     topSpeed: "200",
//     color:"red"
// }

// let carAudi = {
//     name:"Audi",
//     topSpeed: "200",
//     color:"Black"
// }

// let carVW = {
//     name:"VW",
//     topSpeed: "200",
//     color:"Blue"
// }

//constructor function
function Car(nameOfCar, color, topSpeed) {
  (this.name = nameOfCar), (this.color = color), (this.topSpeed = topSpeed);
}

let bmw = new Car("BMW", "Red", "180");
console.log(bmw);
let audi = new Car("audi", "black", "250");
console.log(audi);

class NewCar {
  Car1(nameOfCar, color, topSpeed) {
    (this.name = nameOfCar), (this.color = color), (this.topSpeed = topSpeed);
  }
}

const newCar1 = new NewCar("Maruti", "blue", "90");
console.log(newCar1.name);

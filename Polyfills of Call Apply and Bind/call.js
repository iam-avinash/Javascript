let car = {
  name: "Audi",
  color: "Red",
};

function buyCar(price) {
  console.log(`I brought a ${this.color} ${this.name} of ${price}`);
}

Function.prototype.myCall = function (obj, ...args) {
  obj.fxn = this;
  obj.fxn(...args);
};

buyCar.myCall(car, 10000);

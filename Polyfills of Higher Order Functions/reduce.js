let arr = [1, 2, 3, 4, 5, 5, 6, 7];

// let sum = arr.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// Polyfill for Reduce

Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i]);
  }

  return result;
};

let sum = arr.myReduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

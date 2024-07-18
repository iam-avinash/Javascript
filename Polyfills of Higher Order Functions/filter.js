//polyfill

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.myFilter = function (callback) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      resultArray.push(this[i]);
    }
  }
  return resultArray;
};

let even = arr.myFilter(function (ele) {
  return ele % 2 == 0;
});

console.log(even);

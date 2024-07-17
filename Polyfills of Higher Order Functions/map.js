let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sqArr = arr.map((ele) => {
//   return ele * ele;
// });

// console.log(sqArr);

// Polyfill for Map

Array.prototype.myMap = (callback) => {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

function double(ele) {
  return ele * ele;
}
console.log(arr.map(double));

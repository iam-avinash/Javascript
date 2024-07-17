// const number = [1, 2, 3, 4, 5, 65, 7];

// function mutiply(ele) {
//   console.log(ele * 10);
// }

// number.forEach(mutiply);

// polyfill for forEach

// console.log(Array.prototype);

const name = ["Mark", "Steve", "John"];
const numbers = [1, 2, 3, 4, 5];
Array.prototype.myForEach = function (callback) {
  //need to invoke callback function for every element of array;
  console.log(this); // this -> array through which myForEach is invoked
  for (let i = 0; i < this.length; i++) {
    callback(this[i]); // invoke the callback for each and every element of array;

    // numbers, this = [1,2,3,4,5];

    // callback = function(ele){
    //     console.log(ele+ 2);
    // }

    // this[0] = 1, callback(1) -> 3 - 1st loop
    // this[1] = 2, callback(2) -> 4 - 2nd loop
    // this[2] = 3, callback(3) -> 5 - 3rd loop
    // ...
  }
};

console.log(Array.prototype);

numbers.myForEach(function (ele) {
  console.log(ele + 2);
});

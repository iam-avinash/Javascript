// let a = 20;

// function parent() {
//   let a = 10;
//   function child() {
//     function grandChild() {
//       console.log(a);
//     }
//     grandChild();
//   }
//   child();
// }

// parent();

//Closer

var a = 20;
function parent() {
  var a = 10;
  function child() {
    console.log(a);
  }

  return child;
}

let output = parent();

console.log(output);

output();

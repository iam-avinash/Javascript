function p1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("My name is Alex");
    }, 1000);
  });
}

function p2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("My age is 25");
    }, 2000);
  });
}

function p3() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("I am Cricketer");
    }, 3000);
  });
}

// Promise All
Promise.all([p1(), p2(), p3()])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise Settled
Promise.allSettled([p1(), p2(), p3()])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

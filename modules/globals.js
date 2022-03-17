let i = 0;
let interval = setInterval(function () {
  console.log("Hi");
  if (i === 3) {
    clearInterval(interval);
  }
  i++;
}, 1000);

setImmediate(function () {
  console.log("Hello");
});

//require();

console.log(process);
console.log(__dirname);
console.log(__filename);

global.myVariable = "Value";

console.log(myVariable);

/* DONT USE GLOBALS VARIABLES */

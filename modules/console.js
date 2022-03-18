/* console.info("HI");
console.error("ERROR");
console.warn("WARN");

let table = [
  {
    a: "any",
    b: "num",
  },
  {
    a: "ay",
    b: "nm",
  },
];

console.table(table);

console.group(table);
 */

function f1() {
  console.group("function 1");
  f2();
  console.groupEnd("function 1");
}

function f2() {
  console.group("function 2");
  console.log("Stayfunction 2");
  console.groupEnd("function 2");
}

console.log("Init");
f1();

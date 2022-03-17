//Using environment variables through the process.env method. The variables, by general practices, are put in capital letters, unlike the variables of the language itself

let greeting = process.env.NAME || "nameless";
let web = process.env.WEB || "i don't have web";

console.log("hello " + greeting);
console.log("My web is: " + web);

async function hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello, " + name);
      resolve(name);
    }, 1000);
  });
}

async function speak(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hi Hi Hi");
      resolve(name);
    }, 1000);
  });
}

async function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bye, " + name);
      resolve(name);
    }, 1000);
  });
}

async function main() {
  let name = await hello("Juan");
  await speak();
  await bye(name);
  console.log("finish process");
}

console.log("Init Process");
main();

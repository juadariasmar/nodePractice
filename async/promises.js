function hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello, " + name);
      resolve(name);
    }, 1000);
  });
}

function speak(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hi Hi Hi");
      //resolve(name);
      reject("Hay un error");
    }, 1000);
  });
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bye, " + name);
      resolve();
    }, 1000);
  });
}

console.log("Init process");
hello("Juan")
  .then(speak)
  .then(bye)
  .then((name) => {
    console.log("Finish process");
  })
  .catch((error) => {
    console.error("Error");
    console.log(error);
  });

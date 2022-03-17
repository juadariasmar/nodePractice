function functionAsync(name, callback) {
  console.log("hello, i'm a async function");
  setTimeout(() => {
    console.log("Hello, " + name);
    callback(name);
  }, 1000);
}

function speak(callbackSpeak) {
  setTimeout(() => {
    console.log("Hi Hi Hi");
    callbackSpeak();
  }, 1000);
}

function bye(name, otherCallback) {
  setTimeout(() => {
    console.log("Bye, " + name);
    otherCallback();
  }, 1000);
}

console.log("Init process");
functionAsync("Juan", (name) => {
  speak(() => {
    speak(() => {
      speak(() => {
        bye("Juan", () => {
          console.log("finish process");
        });
      });
    });
  });
});

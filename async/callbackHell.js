function hello(name, callback) {
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

function conversation(name, times, callback) {
  if (times >= 0) {
    speak(() => {
      conversation(name, --times, callback);
    });
  } else {
    bye(name, callback);
  }
}

console.log("Init process");
hello("Juan", (name) => {
  conversation(name, 3, () => {
    console.log("Process finish");
  });
});

/* hello("Juan", (name) => {
  speak(() => {
    speak(() => {
      speak(() => {
        bye("Juan", () => {
          console.log("finish process");
        });
      });
    });
  });
}); */

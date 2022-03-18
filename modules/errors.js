function otherFunction() {
  errorF();
}

function errorF() {
  return 3 + z;
}

function crashAsync(callback) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (e) {
      console.error("error function");
      callback(e);
    }
  });
}

try {
  crashAsync(() => {
    console.log("error");
  });
} catch (err) {
  console.error("error");
  console.error(err);
  console.log("crash detected");
}

console.log("end");

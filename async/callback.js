function functionAsync() {
  console.log("hello, i'm a async function");
  setTimeout(() => {
    console.log("i'm async");
  }, 1000);
}

functionAsync();

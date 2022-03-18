const { exec, spawn } = require("child_process");

/* exec("node console.js", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
}); */

let process = spawn("dir");

console.log(process.pid);
console.log(process.connected);

process.stdout.on("data", (data) => {
  console.log(process.killed);
  console.log(data.toString());
});

process.on("exit", () => {
  console.log("end process");
  console.log(process.killed);
});

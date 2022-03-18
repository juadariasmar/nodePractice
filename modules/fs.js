const fs = require("fs");

function read(route, callback) {
  fs.readFile(route, (error, data) => {
    callback(data.toString());
  });
}

function write(route, content, callback) {
  fs.writeFile(route, content, (error) => {
    if (error) {
      console.error("error", error);
    } else {
      console.log("fine");
    }
  });
}

function deleteF(route, callback) {
  fs.unlink(route, callback);
}

//read(__dirname + "/file.txt", console.log);
//write(__dirname + "/file1.txt", "i am new file", console.log);
deleteF(__dirname + "/file1.txt", console.log);

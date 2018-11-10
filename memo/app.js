console.log("app.js稼働開始");

const fs = require("fs");

fs.appendFile("greeting.txt", "Hello World!", function(err) {
  if(err) {
    console.log(err);
  }
});

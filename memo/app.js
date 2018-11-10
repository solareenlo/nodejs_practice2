console.log("app.js稼働開始");

const fs = require("fs");
const os = require("os");

let user = os.userInfo();
console.log(user);

fs.appendFile("greeting.txt", `Hello ${user.username}!`, function(err) {
  if(err) {
    console.log(err);
  }
});

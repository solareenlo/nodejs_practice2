console.log("app.js稼働開始");

const fs = require("fs");
const os = require("os");

const notes = require("./notes.js");

let user = os.userInfo();
console.log(user);

let result = notes.addNote();
console.log(result);

// fs.appendFile("greeting.txt", `Hello ${user.username}! あなたは${notes.age}歳です.\n`, function(err) {
//   if(err) {
//     console.log(err);
//   }
// });

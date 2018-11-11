console.log("app.js稼働開始");

const fs = require("fs");
const yargs = require("yargs");
const argv = yargs.argv;
const notes = require("./notes.js");

// ↓コンソールに入力されたコマンドの情報を出力する
// console.log("process", process.argv);
// console.log("yargs", argv);

let command = argv._[0];
console.log("コマンド:", command);

if(command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log("保存されました.");
    console.log("---------------");
    console.log(`タイトル:${note.title}`);
    console.log(`内容:${note.body}`);
  } else {
    console.log("タイトルが重複しています.");
  }
} else if(command === "list") {
  notes.showAll();
} else if(command === "read") {
  notes.readNote(argv.title);
} else if(command === "remove") {
  notes.removeNote(argv.title);
}

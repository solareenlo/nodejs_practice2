console.log("notes.js稼働");

console.log(module);

// exprotsを使うことで別ファイルに呼び出せるようにする
// 定数やら
module.exports.age = 25;
// 関数やら
module.exports.addNote = function() {
  console.log("addNote");
  return "new note";
};

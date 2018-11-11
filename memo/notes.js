console.log("notes.js稼働");

const fs = require("fs");

let fetchNotes = () => {
  // 初めてデータを入力したときのエラー処理
  // note-data.jsonが無いときは新たにファイルを作り、
  // note-data.jsonがあるときはデータを付け加える
  try {
    let notesString = fs.readFileSync("note-data.json");
    return JSON.parse(notesString);
  } catch(err) {
    return [];
  }
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  // titleが重複しているときのエラー処理
  // titleが重複していない時にだけ新たなデータを追記する
  // titleが重複しているときは何もしない
  let duplicatedNotes = notes.filter(note => note.title === title);
  if(duplicatedNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("note-data.json", JSON.stringify(notes));
  }
};

let showAll = () => {
  console.log("全メモを表示");
};

let readNote = title => {
  console.log("個別メモ表示", title);
};

let removeNote = title => {
  console.log("メモ削除", title);
};

module.exports = {
  addNote,
  showAll,
  readNote,
  removeNote
};

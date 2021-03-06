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

let saveNotes = notes => {
  fs.writeFileSync("note-data.json", JSON.stringify(notes));
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
    saveNotes(notes);
    return note;
  }
};

let showAll = () => {
  return fetchNotes();
};

let readNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes[0];
};

let removeNote = title => {
  // 既存のデータを取得
  let notes = fetchNotes();
  // 引数をもとに検索し、見つかったら削除
  // titleが同じで無いデータを新たな配列に格納してfilteredNotesに格納
  let filteredNotes = notes.filter(note => note.title !== title);
  // 削除後のデータを保存
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

let logNotes = note => {
    console.log("---------------");
    console.log(`タイトル:${note.title}`);
    console.log(`内容:${note.body}`);
};

module.exports = {
  addNote,
  showAll,
  readNote,
  removeNote,
  logNotes
};

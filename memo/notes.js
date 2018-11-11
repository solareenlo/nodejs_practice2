console.log("notes.js稼働");

const fs = require("fs");

let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };
  notes.push(note);
  fs.writeFileSync("note-data.json", JSON.stringify(notes));
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

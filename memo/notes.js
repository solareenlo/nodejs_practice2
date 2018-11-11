console.log("notes.js稼働");

let addNote = (title, body) => {
  console.log("メモ追加", title, body);
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

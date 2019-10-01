(function(){
  describe('noteList')

  it('can be empty')
  let list = new NoteList();
  console.log(list);
  console.log(list.displayNotes());
  assert.isTrue(list.displayNotes().length === 0);

  it('contains notes')
  let note = new Note('My Favourite language is Javascript');
  let anotherList = new NoteList();
  // let list = new NoteList(note);
  anotherList.addNote(note);
  assert.isTrue(anotherList.displayNotes()[0].text().includes("My Favourite language is Javascript"));

  it('contains another notes')
  let anotherNote = new Note('My Favourite language is Ruby');
  anotherList.addNote(anotherNote);
  assert.isTrue(anotherList.displayNotes()[1].text().includes("My Favourite language is Ruby"));

})();

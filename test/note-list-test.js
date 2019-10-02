(function(){
  describe('noteList')

  it('can be empty')
  let list = new NoteList();
  assert.isTrue(list.displayNotes().length,  0);

  it('contains notes')
  let note = new Note('My Favourite language is Javascript');
  let anotherList = new NoteList();
  // let list = new NoteList(note);
  anotherList.addNote(note);
  assert.contains(anotherList.displayNotes(), note);

  it('contains another notes')
  let anotherNote = new Note('My Favourite language is Ruby');
  anotherList.addNote(anotherNote);
  assert.contains(anotherList.displayNotes(), anotherNote);

})();

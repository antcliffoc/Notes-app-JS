(function(){
  describe('noteListView')

  let list = new NoteList();
  let view = new ListNoteView(list);
  console.log(view);
  it('handles a list with no notes')
  assert.isTrue(view.htmlOutput() === ("<ul><li><div>Empty List</div></li></ul>"));

  it('handles a list with one note')
  let text = 'My Favourite language is Javascript'
  let note = new Note(text);
  list.addNote(note);
  console.log()
  console.log(list.displayNotes());

  assert.isTrue(view.htmlOutput() === (`<ul><li><div>${text}</div></li></ul>`));
})();

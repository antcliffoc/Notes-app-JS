(function(){
  describe('noteController');

  it('can be instantiated');
  let list = new NoteList();
  let controller = new NoteController(list);
  assert.isInstanceOf(controller,  NoteController);

  it('can add notes to notelist')
  let noteText = 'Testing the controller'
  controller.addNote(noteText);
  assert.contains(list.displayNotes()[0].text(), noteText);

  it('sets innerHTML of the app element on the page');
  controller.renderNotes();
  assert.isTrue(document.getElementById('app').innerHTML, `<ul><li>${noteText.substring(0,20)}</li></ul>`)
})();

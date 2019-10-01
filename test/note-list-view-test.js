(function(){
  describe('noteListView')
  it('handles a list with no notes')
  let list = new NoteList();
  let view = new ListNoteView(list);
  assert.isTrue(view.htmlOutput() === ("<ul><li><div>Empty List</div></li></ul>"));

})();

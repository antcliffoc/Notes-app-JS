(function() {

  describe('note')
  it('contains text')
  let note = new Note('My Favourite language is Javascript')
  assert.isTrue(note.text(), "My Favourite language is Javascript")

  it('has a unique id')
  let note2 = new Note('blah blah')
  assert.notTrue(note.id, note2.id);
})();

(function(){
  describe('SingleNoteView');

  it('can be instantiated');
  let note = new Note("testing snv")
  let singleNoteView = new SingleNoteView(note)
  assert.isInstanceOf(singleNoteView, SingleNoteView);

  it('can return a string of html representing the note model')
  assert.isTrue(singleNoteView.htmlOutput(), `<div>${note.text()}</div>`)
})()

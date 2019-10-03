
(function(){
  describe('noteController');

  it('can be instantiated');
  assert.isInstanceOf(controller,  NoteController);

  it('can add notes to notelist')
  let noteText = 'Testing the controller'
  controller.addNote(noteText);
  assert.contains(controller.list.displayNotes()[0].text(), noteText);

  it('sets innerHTML of the app element on the page');
  controller.renderNotes();
  assert.isTrue(document.getElementById('app').innerHTML, `<ul><li><a href="#notes/${controller.list.displayNotes()[0].id}">${noteText.substring(0,20)}</a></li></ul>`)

  function clickTestDelayed() {
    it('renders whole note on click of note link')
    // controller.makeUrlShowNotePage();
    document.getElementsByTagName('a')[0].click();
    function assertion() {assert.isTrue(document.getElementById('app').innerHTML, `<div>${noteText}</div>`)}
    // this ^ code runs before document.getElementById has finished so we have added a timeout to delay it
    setTimeout(assertion, 500)

  }
  // this Timeout pauses the entire test above in order for the prior document.getElementById('app').innerHTML
  // to be the original link before our test code changes it to the single note view
  setTimeout(clickTestDelayed, 600)

})();

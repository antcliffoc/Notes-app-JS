(function(exports){
  function noteContainsText(){
    let testName = "noteContainsText"
    let note = new Note('My Favourite language is Javascript')
    assert.isTrue(note.text() === "My Favourite language is Javascript", testName)


  }
  exports.noteContainsText = noteContainsText();
})(this);

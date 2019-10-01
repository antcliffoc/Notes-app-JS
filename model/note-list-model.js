(function(exports){

  function NoteList(noteText) {
    this._list = [noteText]
  }
  NoteList.prototype.displayNotes = function() {
    return this._list
  };

  NoteList.prototype.addNote = function(note) {
    this._list.push(note)
  }

  exports.NoteList = NoteList
})(this);

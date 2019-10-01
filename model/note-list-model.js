(function(exports){

  function NoteList() {
    this._list = []
  }
  NoteList.prototype.displayNotes = function() {
    return this._list
  };

  NoteList.prototype.addNote = function(note) {
    this._list.push(note)
  }

  exports.NoteList = NoteList
})(this);

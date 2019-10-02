(function(exports){
  function NoteController(noteList){
    this.list = noteList;    
    this.view = new ListNoteView(noteList);

  }
  NoteController.prototype.renderNotes = function(){
    document.getElementById('app').innerHTML = this.view.htmlOutput();
  }

  NoteController.prototype.addNote = function(text){
    let note = new Note(text);
    this.list.addNote(note);
  }

  exports.NoteController = NoteController;
})(this);

controller = new NoteController(new NoteList()).renderNotes();

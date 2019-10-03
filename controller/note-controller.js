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

  NoteController.prototype.makeUrlShowNotePage = function() {
    window.addEventListener("hashchange", function() {
      console.log("i'm running")
      var noteIndex = window.location.hash.split('/')[1];
      console.log(noteIndex)
      console.log(controller.list.displayNotes())
      var note = controller.list.displayNotes()[noteIndex];
      console.log(note)
      var view = new SingleNoteView(note);
      console.log(view)
      document.getElementById('app').innerHTML = view.htmlOutput();
    });
  };

  exports.NoteController = NoteController;
})(this);

controller = new NoteController(new NoteList());
// controller.addNote('first note 123456789101112');
// controller.addNote('second note 123456789101112');
// controller.renderNotes();

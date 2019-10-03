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
      var noteIndex = window.location.hash.split('/')[1];
      var note = controller.list.displayNotes()[noteIndex];
      var view = new SingleNoteView(note);
      document.getElementById('app').innerHTML = view.htmlOutput();
    });
  };

  NoteController.prototype.checkFormSubmit = function() {
    document.getElementById('text').addEventListener('submit', function(event){
      console.log(event.innerHTML)
      event.preventDefault();
    })
  };

  exports.NoteController = NoteController;
})(this);

controller = new NoteController(new NoteList());
// controller.addNote('note 1 longer than 20 characters')
// controller.addNote('note 2 longer than 20 characters')
controller.renderNotes();
controller.makeUrlShowNotePage();
controller.checkFormSubmit();

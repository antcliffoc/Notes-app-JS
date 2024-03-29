(function(exports) {
  function ListNoteView(list){
    this.notelist = list
  }
  ListNoteView.prototype.htmlOutput = function(){
    var htmlString = "<ul>"
    this.notelist.displayNotes().forEach(function(note){
      htmlString += `<li><a href=#notes/${note.id}>${note.text().substring(0,20)}</a></li>`
    })
    return htmlString += "</ul>"
  };
  exports.ListNoteView = ListNoteView;
})(this);

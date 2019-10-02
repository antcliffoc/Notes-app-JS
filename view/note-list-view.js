(function(exports) {
  function ListNoteView(list){
    this.notelist = list
  }
  ListNoteView.prototype.htmlOutput = function(){
    console.log(this.notelist)
    var htmlString = "<ul>"
    this.notelist.displayNotes().forEach(function(note){
      htmlString += `<li>${note.text().substring(0,20)}</li>`
    })
    return htmlString += "</ul>"


  };
  exports.ListNoteView = ListNoteView;
})(this);

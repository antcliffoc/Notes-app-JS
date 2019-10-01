(function(exports) {
  function ListNoteView(list){

  }
  ListNoteView.prototype.htmlOutput = function(list){
    console.log(list)

    return "<ul><li><div>Empty List</div></li></ul>"
  

  };
  exports.ListNoteView = ListNoteView;
})(this);

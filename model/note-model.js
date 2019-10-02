(function(exports) {
  idCount = 0
  function Note(text){
    this._text = text;
    this.id = idCount;
    idCount ++;
  }

  Note.prototype.text = function(){
  return   this._text;
  }
  exports.Note = Note;
})(this);

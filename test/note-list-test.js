(function(){
describe('noteList')
it('contains notes')
let note = new Note('My Favourite language is Javascript');
let list = new NoteList(note);
assert.isTrue(list.displayNotes()[0].text().includes("My Favourite language is Javascript"));

it('contains another notes')
let anotherNote = new Note('My Favourite language is Ruby');
list.addNote(anotherNote);
assert.isTrue(list.displayNotes()[1].text().includes("My Favourite language is Ruby"));

})();

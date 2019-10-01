describe('note')
it('contains text')
let note = new Note('My Favourite language is Javascript')
assert.isTrue(note.text() === "My Favourite language is Javascript")

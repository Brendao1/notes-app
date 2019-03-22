//doubling NoteList and Note 

function NoteDouble(text) {
    this.text  = text
}

NoteDouble.prototype.show = function() {
    return this.text
}

function NoteListDouble() {
    this.notes = []
}

NoteListDouble.prototype.listView = function() {
    return this.notes
}

NoteListDouble.prototype.add = function(note) {
    this.notes.push(note)
}

let noteDouble = new NoteDouble("Favourite spice: cinnamon")
let noteListDouble = new NoteListDouble()

it("test the note controller", function() {
window.addEventListener('load', function() {
    var controller = new Controller(noteListDouble)
    controller.addNote(noteDouble)
    controller.updateDOM()  // need to call here because updateDOM doesn't return anything
    var output = "<p>Favourite spice: cinnamon<br></p>"
    assert.isEqual(document.getElementById('app').innerHTML, output);
})
   

})

// testNoteController()

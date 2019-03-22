

function NoteDouble() {
}

NoteDouble.prototype.show = function() {
    return "TESTING WITH DOUBLES"
}

function NoteListDouble() {
    this.notes = []
}


NoteListDouble.prototype.add = function(text) {
    this.notes.push(new NoteDouble(text))
} 

NoteListDouble.prototype.listView = function() {
    return this.notes
}


function testNoteListView() {
    var list1 = new NoteListDouble();


    var NoteDouble = new NoteDouble()
    list1.add(new NoteDouble)


    var view1 = new NoteListView(list1);

    let output = 
                "<p>" + NoteDouble.show() +  "<br></p>";
    assert.isTrue(view1.toHTML() === output);

};

function testNoNotes() {
    var list1 = new NoteListDouble();
    var view1 = new NoteListView(list1);

    assert.isTrue(view1.toHTML() === "<p></p>");

};

function testOneNote() {

    var NoteDouble2 = new NoteDouble()

    var list1 = new NoteListDouble();
    var view1 = new NoteListView(list1);
    
    list1.add(new NoteDouble)

    let output_for_one_note = "<p>" + NoteDouble2.show() + "<br></p>"
    assert.isTrue(view1.toHTML() === output_for_one_note);
};

// testNoteListView();
// // testNoNotes();
testOneNote();
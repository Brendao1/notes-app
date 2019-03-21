function testNoteListView() {
    var list1 = new NoteList();
    var view1 = new NoteListView(list1);

    // var note1 = ("Favourite drink: seltzer")
    var note1 = ("Ferraris are awesome")
    var note2 = ("Roses are gorgeous")
    var note3 = ("The Sky is depth")


    list1.add(note1)
    list1.add(note2)
    list1.add(note3)

    let output = 
                "<p>" + note1 + "<br>"
                + note2 + "<br>"
                + note3 + "<br>";
    assert.isTrue(view1.toHTML() === output);

};

function testNoNotes() {
    var list1 = new NoteList();
    var view1 = new NoteListView(list1);

    assert.isTrue(view1.toHTML() === "<p>");

};

function testOneNote() {
    var list1 = new NoteList();
    var view1 = new NoteListView(list1);
    var note1 = ("Ferraris are awesome")
    
    list1.add(note1)

    let output_for_one_note = "<p>" + note1 + "<br>"
    assert.isTrue(view1.toHTML() === output_for_one_note);
};

testNoteListView();
testNoNotes();
// testOneNote();
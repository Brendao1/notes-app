function testNoteListView() {
    var list1 = new NoteList();
    var view1 = new NoteListView(list1);

    var note1 = ("Ferraris are awesome")
    var note2 = ("Roses are gorgeous")

    list1.add(note1)
    // list1.add(note2)

    let output = "<p>Ferraris are awesome<br></p>"
    assert.isTrue(view1.toHTML() === "<p>Ferraris are awesome<br></p>");
};

testNoteListView();
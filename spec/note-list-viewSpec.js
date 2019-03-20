function testNoteListView() {
    var list1 = new NoteList();
    var view1 = new NoteListView(list1);

    var note1 = ("Ferraris are awesome")
    var note2 = ("Roses are gorgeous")
    var note3 = ("The Sky is blue")

    list1.add(note1)
    list1.add(note2)
    list1.add(note3)

    let output = 
                "<p>" + note1 + "<br>"
                + note2 + "<br>"
                + note3 + "<br></p>";
    assert.isTrue(view1.toHTML() === output);
};

testNoteListView();
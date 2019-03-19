function testNoteListView() {
    var view1 = new NoteListView(list1);
    var list1 = new Notelist();
    note1 = ("Ferraris are awesome")
    note2 = ("Roses are gorgeous")

    list1.add(note2)
    // NoteList.add(note1)

    assert.isTrue(view1.toHTML === "Ferraris are awesome");
};

testNoteListView();
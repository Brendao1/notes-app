function testNoteListModel() {
    var noteList = new NoteList();

    // console.log(noteList.notes)
    // assert.isTrue(noteList.notes == []);
    assert.isTrue(noteList.notes instanceof Array);
    // assert.isTrue(noteList.notes == []);
};

// testNoteListModel();
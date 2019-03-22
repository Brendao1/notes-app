it("test the note", function() {
    var note = new Note("Javascript is my favourite language");
    assert.isTrue(note.show() === "Javascript is my favourite language");
  });

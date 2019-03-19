
function testNote() {
    var note = new Note("Javascript is my favourite language");
    assert.isTrue(note.show() === "Javascript is my favourite language");
  };

  testNote()
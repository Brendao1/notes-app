As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want

As a programmer
I can create a new note
So I can record something I need to remember 

it('shows the content of the note', function() {
    note = new Note("Javascript is my favourite language")
    note.show()
    expect(note.content).toEqual("Javascript is my favourite language")
})

As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
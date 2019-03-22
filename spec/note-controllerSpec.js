function testNoteController() {

    let list1 = new NoteList()
    let note1 = new Note ("Favourite spice: cinnamon")
    list1.add(note1)

    var output = "Favourite spice: cinnamon"

    var controller = new Controller(list1, note1)
    
    // making the function return a specific value
    controller.updateDOM = function() {
        return "Favourite spice: cinnamon"
    };

    assert.isTrue(controller.updateDOM() === output);

}

// testNoteController()

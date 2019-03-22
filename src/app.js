// console.log('LOADING THE APP')
//on load, create the app
window.addEventListener('load', function() {

    var noteList = new NoteList()
    var controller = new Controller(noteList);
    // controller.howdy()
    controller.addNote("Testerrrrr")
    controller.updateDOM()
})
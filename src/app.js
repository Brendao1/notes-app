// console.log('LOADING THE APP')
//on load, create the app
window.addEventListener('load', function() {

    var noteList = new NoteList()
    var controller = new Controller(noteList, 'Testerrrr');
    // controller.howdy()
    controller.updateDOM()
})
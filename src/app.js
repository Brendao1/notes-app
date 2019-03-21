// console.log('LOADING THE APP')
//on load, create the app
window.addEventListener('load', function() {

    var controller = new Controller()
    controller.howdy()
    // controller.add_note()
    controller.updateDOM()
})
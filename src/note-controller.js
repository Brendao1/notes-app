function Controller() {
    // this.noteModel = noteModel
    // this.notesView = notesView
}

Controller.prototype = {
    howdy: function() {
        document.getElementById("app").innerHTML = "<p>howdy</p>"
    }
}
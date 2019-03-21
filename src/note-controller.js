(function(exports) {

    function Controller() {
        // this.note = new Note(text)
        // this.NoteListView = new NoteListView(NoteList)
        // this.NoteList = new NoteList()
    }
    
    Controller.prototype = {
        howdy: function() {
            document.getElementById("app").innerHTML = "<p>howdy</p>"
        }
    }

    exports.Controller = Controller;
}) (this);

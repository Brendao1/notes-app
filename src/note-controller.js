(function(exports) {

    function Controller(list) {
        this.note = new Note("Favourite drink: seltzer")
        this.list = new NoteList()
        this.view = new NoteListView(list)
    }
    Controller.prototype = {
        howdy: function() {
            document.getElementById("app").innerHTML = "<p>howdy</p>"
        },
        // adds note to the NoteListView
        add_note: function() {
            this.list.add(this.note) 
            console.log(this.list)         
        },

        updateDOM: function() {
            document.getElementById("app").innerHTML = this.view.toHTML()
        }
    }

    exports.Controller = Controller;
}) (this);

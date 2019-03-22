(function(exports) {

    function Controller(noteList, note) {
        this.list = noteList
        this.list.add("Favourite drink: seltzer")
        this.list.add("Favourite food: pretzels")
        // this.list.add(note)
        this.view = new NoteListView(this.list)
    }
    
    Controller.prototype = {
        howdy: function() {
            document.getElementById("app").innerHTML = "<p>howdy</p>"
        },

        updateDOM: function() {
            document.getElementById("app").innerHTML = this.view.toHTML()
        }
    }

    exports.Controller = Controller;
}) (this);

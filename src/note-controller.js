(function(exports) {

    function Controller() {
        this.list = new NoteList()
        this.list.add("Favourite drink: seltzer")
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

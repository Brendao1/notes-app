(function(exports) {

    function NoteListView(NoteList) {
        this.notelist = NoteList
    };

    NoteListView.prototype.toHTML = function () {
        
        var string = "<p>";

        this.notelist.listView().forEach(function(note) {
            string += note.show() + "<br>"
        })
        string += "</p>";

        return string
    }

    exports.NoteListView = NoteListView
})(this);
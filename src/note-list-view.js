(function(exports) {

    function NoteListView(NoteList) {
        this.notelist = NoteList
    };

    NoteListView.prototype.toHTML = function () {
        let string = "<p>";

        this.notelist.notes.forEach(note => {
            // document.write(string += note.show() + "<br>"); // soon deprecated
            string += note.show() + "<br>"
        })
        string += "</p>";

        document.write(string);
        return string
    }

    exports.NoteListView = NoteListView
})(this);
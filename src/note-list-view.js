(function(exports) {

    function NoteListView(NoteList) {
        this.notelist = NoteList
    };

    NoteListView.prototype.toHTML = function () {
        let string = "<p>";

        this.notelist.notes.forEach(note => {
            // window.alert(note.show());
            document.write(string += note.show() + "<br>"); // soon deprecated
            // string += note.show() + "<br>";
        })
        string += "</p>";
        console.log(string)
        return string
    };
    exports.NoteListView = NoteListView
})(this);
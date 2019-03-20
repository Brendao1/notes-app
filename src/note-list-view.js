(function(exports) {

    function NoteListView(NoteList) {
        this.notelist = NoteList
    };

    NoteListView.prototype.toHTML = function () {
        let string = "<p>";  // why does this have to be declared outside the function?

        this.notelist.notes.forEach(note => {
            // console.log(note.show());
            // window.alert(note.show());
            // document.write(note.show());  // soon deprecated
            document.write(string += note.show() + "<br>");
            // string += note.show() + "<br>";
        })
        string += "</p>";
        console.log(string)
        return string
    };

    exports.NoteListView = NoteListView
})(this);
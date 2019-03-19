(function(exports) {

    function NoteListView(NoteList) {
        this.NoteList = NoteList
    };

    NoteListView.prototype.toHTML = function() {

        this.NoteList.notes.forEach(note => {
            // stringStart = <ul><li><div>  
            string = " "
            // console.log(note.show());
            // document.write(string + note.show());
            window.alert(note.show());
            // document.write(note.show());  // soon deprecated


        })
    };


    exports.NoteListView = NoteListView
})(this);
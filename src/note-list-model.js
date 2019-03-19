(function(exports) {

    function NoteList() {
        this.notes = []
    }
    
    NoteList.prototype.add = function(text) {
        this.notes.push(new Note(text))
    }

    NoteList.prototype.listView = function() {
        return this.notes
    }
    exports.NoteList = NoteList;

  })(this);
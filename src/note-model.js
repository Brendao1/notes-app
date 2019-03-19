// this uses an anonymous function. it's an IIFE, it's a module

(function(exports) {

    function Note(text) {
        this.text = text;
    }
    
    Note.prototype.show = function() {
        return this.text
    }
    exports.Note = Note;

  })(this);
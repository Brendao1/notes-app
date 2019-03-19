
// (function(exports) {
//     // var EXCLAMATION_MARK_COUNT = 5
  
//     function exclaim(string) {
//       return string + "!".repeat(EXCLAMATION_MARK_COUNT);
//     };
  
//     exports.exclaim = exclaim;
//   })(this);


function Note(text) {
    this.text = text;
}

Note.prototype.show = function() {
    return this.text
}

(function(exports){
  var assert = {
      isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
          throw new Error("Assertion failed: " + assertionToCheck + " is not true");
        }
      },

      isEqual: function(assertionToCheck, expectedOutput) {
        if (assertionToCheck !== expectedOutput) {
          throw new Error("Assertion failed: " + assertionToCheck + " is not equal to " + expectedOutput)
        }
      }
     };

  var it = function(string, callback){
    try {
      callback()
      addText(string, "Everything OK!")
    } catch(error) {
      addText(string, error.stack)
    }
  }

  function addText(string, message){

    var div = document.createElement('div')
    if (message == "Everything OK!"){
      var text = document.createTextNode("Pass " + string)
      div.setAttribute('style',"background-color:green")
    }else{
      var text = document.createTextNode("Fail " + string + message)
      div.setAttribute('style',"background-color:red")
    }
    div.append(text)
    document.getElementById('test').append(div)
    document.getElementById('test').append(document.createElement('br'))
  }

  exports.assert = assert
  exports.it = it

})(this);

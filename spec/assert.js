var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not true");
      } else {
        console.log("Everything OK!");
      }
    }
   };
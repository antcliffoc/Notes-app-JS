var assert = {
  isTrue: function(assertionToCheck, testName) {
    if (!assertionToCheck) {
      var errorText = ("Assertion failed: " + assertionToCheck + " is not truthy");
      document.getElementById('description').insertAdjacentHTML('beforeend', `We expected ${assertionToCheck} - Failed ${errorText} <br /> <br />`)

    }else {
      document.getElementById('description').insertAdjacentHTML('beforeend', 'Passed <br /> <br/>')

    }
  }
};

 function describe(description){
   document.getElementById('description').insertAdjacentHTML('beforeend', `${description} <br /> <br/>`)
 };

 function it(description){
   document.getElementById('description').insertAdjacentHTML('beforeend', `${description}`)
 }

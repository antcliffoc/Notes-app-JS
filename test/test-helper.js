var assert = {
  isTrue: function(assertionToCheck, testName) {
    if (!assertionToCheck) {
      var errorText = ("Assertion failed: " + assertionToCheck + " is not truthy");
      document.getElementById('testErrors').insertAdjacentHTML('beforeend', `We expected ${assertionToCheck} - Failed ${errorText} <br /> <br />`)

    }else {
      document.getElementById('testErrors').insertAdjacentHTML('beforeend', 'Passed <br /> <br/>')

    }
  }
};

 function describe(description){
   document.getElementById('description').insertAdjacentHTML('beforeend', `${description}`)
 };

 function it(description){
   document.getElementById('itText').insertAdjacentHTML('beforeend', `${description}`)
 }

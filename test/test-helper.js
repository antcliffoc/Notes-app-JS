var assert = {
  isTrue: function(assertionToCheck, testName) {
    if (!assertionToCheck) {
      var error_text = ("Assertion failed: " + assertionToCheck + " is not truthy");
      document.getElementById('test_errors').insertAdjacentHTML('beforeend', `We expected ${assertionToCheck} - Failed ${error_text} <br /> <br />`)

    }else {
      document.getElementById('test_errors').insertAdjacentHTML('beforeend', ` ${testName}  - Passed  <br /> <br />`)

    }
  }
};

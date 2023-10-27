function validateForm() {
  var digitInputs = document.getElementsByClassName("digits");

  for (let i = 0; i < digitInputs.length; i++) {
    if (!/^[0-9]+$/.test(digitInputs[i].value)) {
      alert("Please enter only digits in the " + digitInputs[i].id + " field");
      digitInputs[i].focus();
      return false;
    }
  }

  var textInput = document.getElementsByClassName("text");

  for (let i = 0; i < textInput.length; i++) {
    if (!/^[A-Za-z]+$/.test(textInput[i].value)) {
      alert("Please enter only letters in the " + textInput[i].id + " field");
      textInput[i].focus();
      return false;
    }
  }

  var confirmCheckbox = document.getElementById("confirm");

  if (!confirmCheckbox.checked) {
    alert("Please agree to the booking terms & conditions.");
    return false;
  }

  return true;
}

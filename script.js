// Assignment code here
function passwordLength() {
  var length = prompt("Please choose a number between 8 to 128 (length for password)")

  if (length > 128 || length < 8) {
    alert("Try again. You must choose a number between 8 and 128")
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

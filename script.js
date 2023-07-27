function passwordLength() {
  var length = prompt("Please choose a number between 8 to 128 (length for password)")

  if (length > 128 || length < 8) {
    alert("Try again. You must choose a number between 8 and 128")
  }
}

function characterTypes() {
  var lowercase = confirm("Would you like to include lowercase characters?")
  var uppercase = confirm("Would you like to include uppercase characters?")
  var numeric = confirm("Would you like to include numeric characters?")
  var special = confirm("Would you like to include special characters?")

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must choose at least one character type");
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

function passwordLength() {
  var length = prompt("Please choose a number between 8 to 128 (length for password)");

  if (length <= 128 && length >= 8) {
    return length;
  }
  alert("Try again. You must choose a number between 8 and 128");
  return passwordLength();
}

function characterTypes() {
  var types = {
    lowercase: confirm("Would you like to include lowercase characters?"),
    uppercase: confirm("Would you like to include uppercase characters?"),
    numeric: confirm("Would you like to include numeric characters?"),
    special: confirm("Would you like to include special characters?")
  };

  if (!types.lowercase && !types.uppercase && !types.numeric && !types.special) {
    alert("You must choose at least one character type");
    return characterTypes();
  }
  return types;
}

function createMyPassword() {
  var length = passwordLength();
  var characterType = characterTypes();
  var combination = "";
  var password = "";
  var charactersLower = "abcdefghijklmnopqrstuvwxyz";
  var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersNumeric = "0123456789";
  var charactersSpecial = "!#$$%&'()*,-./:;<=>?@[\]^_`{|}~";

  if (characterType.lowercase) {
    combination += charactersLower;
  }
  if (characterType.uppercase) {
    combination += charactersUpper;
  }
  if (characterType.numeric) {
    combination += charactersNumeric;
  }
  if (characterType.special) {
    combination += charactersSpecial;
  }

  for (var i = 0; i < length; i++) {
    password += combination[Math.floor(Math.random() * combination.length)];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createMyPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

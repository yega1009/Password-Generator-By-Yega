// This function prompts user to choose length of password and decides on length of password
function passwordLength() {
  var length = prompt("Please choose a number between 8 to 128 (length for password)");

  // This if statement checks if chosen length is acceptable and if not, it will prompt user again
  if (length <= 128 && length >= 8) {
    return length;
  }
  alert("Try again. You must choose a number between 8 and 128");
  return passwordLength();
}

// This function prompts user to choose criteria and collects characters to include in the password
function characterTypes() {
  var types = {
    lowercase: confirm("Would you like to include lowercase characters?"),
    uppercase: confirm("Would you like to include uppercase characters?"),
    numeric: confirm("Would you like to include numeric characters?"),
    special: confirm("Would you like to include special characters?")
  };

  // This if statement checks if user chose at least one character type and if not, prompts user again
  if (!types.lowercase && !types.uppercase && !types.numeric && !types.special) {
    alert("You must choose at least one character type");
    return characterTypes();
  }
  return types;
}

// This function creates randomized password
function createMyPassword() {
  // these variables call functions above for length of password and characters in password
  var length = passwordLength();
  var characterType = characterTypes();
  var combination = "";
  var password = "";
  // These variables define the list of elements within each character type
  var charactersLower = "abcdefghijklmnopqrstuvwxyz";
  var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersNumeric = "0123456789";
  var charactersSpecial = "!#$$%&'()*,-./:;<=>?@[\]^_`{|}~";

  // These if statements add different character types to the potential combination of password
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

  // This for loop creates a randomized password with the selected length and character types
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

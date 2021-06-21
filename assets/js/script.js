function generatePassword() {
  // Options - const since they won't change.
  const lowerCaseOption = "abcdefghijklmnopqrstuvwxyz";
  const numberOptions = "0123456789";
  const specialCharOptions = "~!@#$%^&*()-_+=<,>.?";
  const upperCaseOptions = lowerCaseOption.toUpperCase();

  // Selecting password length returns a string stored in inputPropmt
  let inputPrompt = prompt("Please put in a number between 8 and 128");
  //  Converting string to int.
  let passwordLength = parseInt(inputPrompt);

  // Password Length
  if (
    typeof inputPrompt !== "number" ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert("Please put in a number between 8 and 128 for your password length");
    return;
  }

  // Selecting options
  let includeLowerCase = confirm("Include lowercase letters? e.g abc");
  let includeUpperCase = confirm("Include uppercase letters? e.g. ABC");
  let includeNumbers = confirm("Include numbers? e.g. 123");
  let includeSpecialChars = confirm("Include special characters? e.g. !@#");

  // Generated password storage string
  let generatedPassword = "";

  // Condition validation
  if (includeLowerCase) {
    generatedPassword += lowerCaseOption;
  }
  if (includeUpperCase) {
    generatedPassword += upperCaseOptions;
  }
  if (includeNumbers) {
    generatedPassword += numberOptions;
  }
  if (includeSpecialChars) {
    generatedPassword += specialCharOptions;
  }

  if (generatedPassword.length === 0) {
    return;
  }

  // Picking random selections from the generated password and assigning it to the
  // new passowrd.
  let password = "";
  for (i = 0; i < passwordLength; i++) {
    let genPassRandNum = Math.floor(Math.random() * generatedPassword.length);
    password += generatedPassword[genPassRandNum];
  }

  // This function returns a string stored in password
  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Assignment Code
let generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here

// Define random generators using ASCII

// function getRandomUpper () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// };

// function getRandomLower () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// };

// function getRandomIndexgetRandomIndex () {
//   return (Math.floor(Math.random() * 10));
// };

// function getRandomSpecialCharacter () {
//   var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // removed " and \ from specialCharacters for the sake of working.
//   return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
// };

// console.log(">>>randUpper>>>" , getRandomUpper());
// console.log(">>>randLower>>>" , getRandomLower());
// console.log(">>>randNumber>>>" , getRandomIndexgetRandomIndex());
// console.log(">>>randSpecialCharacter>>>" , getRandomSpecialCharacter());

// End random generators using ASCII

// Start Character Arrays

var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
var specialCharacterArray = [" " , "!" , "\"" , "#" , "$" , "%" , "&" , "'" , "(" , ")" , "*" , "+" , "," , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "\\" , "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~"];
// console.log(">>> upperArray >>>" , upperArray);
// console.log(">>> lowerArray >>>" , lowerArray);
// console.log(">>> numberArray >>>" , numberArray);
// console.log(">>> specialCharacterArray >>>" , specialCharacterArray);

// End Character Arrays

// Beging generatePassword function
function generatePassword() {

  // Prompt user for password criteria
  var passwordLength = function promptPasswordLength() {
    var passwordLengthInput = window.prompt("How many characters would you like your password to contain?");
      if (passwordLengthInput < 8 || passwordLengthInput > 128) {
        window.alert("Password must be atleast 8 characters and less than 128 characters.");
        promptPasswordLength();
      } else {
        passwordLength = passwordLengthInput;
      };
  };

  var wantsUpper = function promptWantsUpper() {
    var wantsUpperInput = window.confirm("Click OK to include uppercase letters.");
    wantsUpper = wantsUpperInput;
  };

  var wantsLower = function promptWantsLower() {
    var wantsLowerInput = window.confirm("Click OK to include lowercase letters.");
    wantsLower = wantsLowerInput;
  };

  var wantsNumber = function promptWantsNumber() {
    var wantsNumberInput = window.confirm("Click OK to include numbers.");
    wantsNumber = wantsNumberInput;
  };

  var wantsSpecialCharacter = function promptWantsSpecialCharacter() {
    var wantsSpecialCharacterInput = window.confirm("Click OK to include special characters.");
    wantsSpecialCharacter = wantsSpecialCharacterInput;
  };

  passwordLength();
    console.log(">>>passwordLength is>>>" , passwordLength);
  wantsUpper();
    console.log(">>>Wants upper?>>>" , wantsUpper);
  wantsLower();
    console.log(">>>Wants lower?>>>" , wantsLower);
  wantsNumber();
    console.log(">>>Wants numbers?>>>" , wantsNumber);
  wantsSpecialCharacter();
    console.log(">>>Wants special characters?>>>" , wantsSpecialCharacter);

  // End prompt user for password criteria

  // Create an array of possible password characters based on what criteria the user selected
  var possiblePasswordCharactersArray = [];

  // Start push user selected criteria to array

  /// use array.push(...array) with the 3... when pushing an array into an arry to avoid unecessary commas. This is called the spread operator.
  if (wantsUpper) {
    possiblePasswordCharactersArray.push(...upperArray)
  };

  if (wantsLower) {
    possiblePasswordCharactersArray.push(...lowerArray)
  };

  if (wantsNumber) {
    possiblePasswordCharactersArray.push(...numberArray)
  };

  if (wantsSpecialCharacter) {
    possiblePasswordCharactersArray.push(...specialCharacterArray)
  };

  if (!wantsUpper && !wantsLower && !wantsNumber && !wantsSpecialCharacter) {
    window.alert("You must select at least one character type to include. Click 'OK' to start over.")
    location.reload();
  };

  // End of pushing selected criteria to array

  // convert possiblePasswordCharactersArray into a string

  // BUG BELOW the string characters are all separated by commas which are being counted as characters of the string
  var possiblePasswordCharactersString = possiblePasswordCharactersArray.join('');
    console.log(">>>possible password characters string >>>" , possiblePasswordCharactersString);

  // End of converting possiblePasswordCharacter Array into possiblePasswordCharacterString

  // Start random generatePassword

  //store the generatedRandomCharacters
  var generatedRandomCharacters = [];

    for (var i = 0; i < passwordLength; i++) {
      var getRandomIndex = Math.floor(Math.random() * possiblePasswordCharactersString.length);
      // console.log(">>> getRandomIndex >>>" , getRandomIndex);
      // this is getting us to a random INDEX in the string... we need to find that place
      var randomCharacter = possiblePasswordCharactersString[getRandomIndex];
      // console.log(">>> randomCharacter >>>" , randomCharacter);
      // store the randomly generated characters somewhere
      generatedRandomCharacters.push(randomCharacter);
      // convert the array of genereatedRandomCharacters to a string
      // BUG BELOW join is separating the characters by commas
    };
    return generatedRandomCharacters.join('');
  // End random generatePasswor
};
// generatePassword();

// Assignment code ends here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // you need to write this function, generatePassword, that will generate and return the password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
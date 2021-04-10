// Assignment code here



// variables for password
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowerCase;
// Password variable values

character =  ["&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1,2,3,4,5,6,7,8,9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;

//uppercase conversion
var toUpper = function (x){
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function(){
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//begining of password generate function
function generatePassword(){
  //character choice prompt
  enter = parseInt(prompt("How many Characters would you like? pick a number between 8 and 128"));
  if (!enter){

    alert("no value selected. please enter a value");
  }else if (enter < 8 || enter > 128){
    //input validation
    enter = parseInt(prompt("choose a value between 8 and 128"));

  } else {
    confirmNumber = confirm("do you want to use neumbers?");
    confirmCharacter = confirm(" Do you want to include special characters?");
    confirmUppercase = confirm(" do you want to use uppercase letters?");
    confirmLowerCase  = confirm("do you want to use lowercase letters?");
  };
  // Else if for all negative selections
  
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

  }

  // Else for all yes
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, alpha, alpha2);
}

  // 3 YES choices
  else if (confirmCharacter && confirmUppercase && confirmLowercase){
    choices = charachter.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }

  // 2 yes choices
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  }  
  else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);

  } 
  else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

  } 
  else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

  } 
  else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }
  // 1 YES choices
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
}
  else if (confirmLowercase) {
    choices = alpha;
  }

  // uppper case conversion
  else if




}
var password = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(ps) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

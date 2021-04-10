var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Password variable values

character =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;
//uppercase conversion
var toUpper = function (x){
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function() {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

//begining of password generate function
function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!enter) {
    alert("This needs a value");
  } 
  else if (enter < 8 || enter > 128) {
    // Validates user input
    // Start user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));

  } 
  else {
    // Continues once user input is validated
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  
  };
  
  // Else if for all negative selections
  
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must make a choice!");

  }

  // Else for all yes
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, alpha, alpha2);
  }

  // 3 YES choices
  else if (confirmCharacter && confirmNumber && confirmUppercase){
    choices = character.concat(number, alpha2);
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
  else if (confirmUppercase){
    choices = space.concat(alpha2);
  };





  var password = [];

  // random selection
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  // joins password to array and converts to string
  var ps = password.join("");
    UserInput(ps);
    return ps;
}
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}



// Write password to the #password input
function UserInput(ps) {
  document.getElementById("password").textContent = ps;


}


generateBtn.addEventListener("click", writePassword);


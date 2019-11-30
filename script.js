
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE

    // Define variables
    var specChar = ["!","#","$","%","&","\"","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
    var numbers = ["0","1","2","3","4","5","6","7","8","9"]
    var lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var pwLen = 0;
    var numSpCh = 0;
    var numNum = 0;
    var numLower = 0;
    var numUpper = 0;
    var pwChars = [];
    var password;

    // Prompt user for password length
    while ( pwLen < 8 || pwLen> 128) {
        pwLen = prompt("Enter a password length between 8-128.");
        numUpper = pwLen - 3;
    }

    // Prompt user for number of special characters
    while ( numSpCh <1 || numSpCh > numUpper) {
        numSpCh = prompt("How many Special Characters (1 - "+numUpper+")?");
    }
    // Sets the value of numUpper to remaining characters available
    numUpper = numUpper - numSpCh +1;
    
    // Prompt user for number of numbers
    while ( numNum <1 || numNum > numUpper) {
        numNum = prompt("How many Numbers (1 - "+numUpper+")?");
    }
    // Sets the value of numUpper to remaining characters available
    numUpper = numUpper - numNum +1 ;
    
    // Prompt user for number of lower case letters
    while ( numLower <1 || numLower > numUpper) {
        numLower = prompt("How many lower case letters (1 - "+numUpper+")?");
    }
    // Sets the value of numUpper to remaining characters available
    numUpper = numUpper - numLower +1;
   alert("Your password will contain "+numUpper+ " uppercase characters.");

   // This creates a new array based on number of characters selected above
   for (var i = 0; i < 25; i++) {
    var item = specChar[Math.floor(Math.random()*specChar.length)];
    pwChars.push(item);
  }

  for (var i = 0; i < 25; i++) {
    var item = numbers[Math.floor(Math.random()*numbers.length)];
    pwChars.push(item);
  }
  for (var i = 0; i < 25; i++) {
    var item = lCase[Math.floor(Math.random()*lCase.length)];
    pwChars.push(item);
  }

  for (var i = 0; i < 25; i++) {
    var item = uCase[Math.floor(Math.random()*uCase.length)];
    pwChars.push(item);
  }

  for (var i = 0; i < 5; i++) {
    var item = uCase[Math.floor(Math.random()*uCase.length)];
    pwChars.push(item);
  }

  pwChars.sort(function(a, b){return 0.5 - Math.random()});
//   pwChars.join("")
password = pwChars.join("")
    
    // console.log("Special Characters");    
    console.log("PW Length = "+pwLen);    
    console.log("Spec Char = "+numSpCh);    
    console.log("Numbers = "+numNum);    
    console.log("Lower = "+numLower);    
    console.log("Upper = "+numUpper);    
    console.log(password);



    // alert("ive been clicked");
    return password;
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);

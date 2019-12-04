
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
// var passwordText = document.querySelector("#password");


//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE
    // passwordText.value = "this is a test";
    // copyBtn.setAttribute("disabled");
    // console.log(passwordText.value);
    
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
    var passWord;

    // Prompt user for password length
    while ( pwLen < 8 || pwLen> 128) {
        pwLen = prompt("Enter a password length between 8-128.");
        if (pwLen === null) {
            return "Process Cancelled";}
        numUpper = pwLen - 3;
    }

    // Prompt user for number of special characters
    while ( numSpCh <1 || numSpCh > numUpper) {
        numSpCh = prompt("How many Special Characters (1 - "+numUpper+")?");
        if (numSpCh === null) {
            return "Process Cancelled";}
    }
    // Sets the value of numUpper to remaining characters available
    numUpper = numUpper - numSpCh +1;
    console.log(numUpper);
    
    // if user selects the maximum amount of special characters it stops prompting 
    // and sets the remaining categories to 1
    if (numUpper !== 1){
    // Prompt user for number of numbers
    while ( numNum <1 || numNum > numUpper) {
        numNum = prompt("How many Numbers (1 - "+numUpper+")?");
        if (numNum === null) {
            return "Process Cancelled";}
    }
    // Sets the value of numUpper to remaining characters available
    numUpper = numUpper - numNum +1 ;
    }
    else ( numNum =1)
    
    // if user selects the maximum amount of numbers it stops prompting 
    // and sets the remaining categories to 1
    if (numUpper !==1) {
    // Prompt user for number of lower case letters
    while ( numLower <1 || numLower > numUpper) {
        numLower = prompt("How many lower case letters (1 - "+numUpper+")?");
        if (numLower === null) {
            return "Process Cancelled";}
    }
    // Sets the value of numUpper to remaining characters available
    numUpper = numUpper - numLower +1;
    }
    else ( numLower =1)

   alert("Your password will contain "+pwLen+" characters consisting of:\n"
   +numSpCh+ " special characters.\n"
   +numNum+ " numbers.\n"
   +numLower+ " lowercase characters.\n"
   +numUpper+ " uppercase characters.");




   // Randomly selects the chosen amount of special characters and adds them to the pwChar array
   for (var i = 0; i < numSpCh; i++) {
    var item = specChar[Math.floor(Math.random()*specChar.length)];
    pwChars.push(item);
  }

   // Randomly selects the chosen amount of numbers and adds them to the pwChar array
   for (var i = 0; i < numNum; i++) {
    var item = numbers[Math.floor(Math.random()*numbers.length)];
    pwChars.push(item);
  }

   // Randomly selects the chosen amount of lowercase letters and adds them to the pwChar array
   for (var i = 0; i < numLower; i++) {
    var item = lCase[Math.floor(Math.random()*lCase.length)];
    pwChars.push(item);
  }

   // Randomly selects uppercase letters for the remaining amount of
   // password characters and adds them to the pwChar array
   for (var i = 0; i < numUpper; i++) {
    var item = uCase[Math.floor(Math.random()*uCase.length)];
    pwChars.push(item);
  }

//   Randomly sorts the array of password characters
    pwChars.sort(function(a, b){return 0.5 - Math.random()});

//   Concatenates all the characters in the array of password characters
    passWord = pwChars.join("")
    
    console.log("PW Length = "+pwLen);    
    console.log("Spec Char = "+numSpCh);    
    console.log("Numbers = "+numNum);    
    console.log("Lower = "+numLower);    
    console.log("Upper = "+numUpper);    
    console.log(passWord);
    console.log(passWord.length);

    return passWord;
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    passwordText.setAttribute("style", "color: red;")

    if (passwordText.value !== "Process Cancelled"){
        passwordText.setAttribute("style", "color: black;")
        copyBtn.removeAttribute("disabled");
    copyBtn.focus();
    };
}

function copyToClipboard() {
    // BONUS 
    var copyText = document.querySelector("#password").select();
    document.execCommand("copy")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);

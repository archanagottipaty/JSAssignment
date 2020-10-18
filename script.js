// Assignment Code

var lowerChars = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t" ,"u", "v", "w", "x", "y", "z"]
var upperChars = ["A", "B", "C", "D", "E", "F"]
var nums = [0,1, 2, 4, 5, 6, 7, 8,9]
var sChars = ["@", "$", "!", "(", "^"]
var length
var possibles = []

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  
  length = parseInt(prompt("How long does this password need to be?"))

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("No can dooooo, refresh the page")
  } else {

    var lowercharsTrue = confirm("Do you want lower case chars?")
    var uppercharsTrue = confirm("Do you want upper case chars?")
    var numsTrue = confirm("Do you want nums?")
    var sCharsTrue = confirm("Do you want special chars?")

    if (lowercharsTrue) possibles.push(lowerChars)
    if (uppercharsTrue) possibles.push(upperChars)
    if (numsTrue) possibles.push(nums)
    if (sCharsTrue) { possibles.push(sChars) }
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("testing writePassword")

  }}

function generatePassword()
{var pw = ""

while (pw.length < length) {
  for (let i = 0; i < possibles.length; i++) {
    if (pw.length < length) {
      // console.log("Possibles" + possibles[i] + "Possibles.length  :" + possibles[i].length)
      let rand = Math.floor(Math.random() * possibles[i].length)
      console.log(rand)
      pw += possibles[i][rand]
    }
  }
}
// console.log(pw, `password length: ${pw.length}`)
return  pw;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

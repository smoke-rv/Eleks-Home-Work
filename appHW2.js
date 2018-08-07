//1. Write a JavaScript function to check if given string includes given symbol.
let string22 = "some random text";
/*let givenSymbol = "yx";
  if (string22.includes("x"))
  return true;
  else
  return false; */
console.log(string22.includes("xyz"));

//2. Write a JavaScript function to check whether a string is blank or not.
isStringBlank = function(blank) {
    if (blank.length === 0)
    return true;
    else 
    return false;
  }
console.log(isStringBlank(''));
console.log(isStringBlank('some random text'));

//3. Write a JavaScript function to convert a string in abbreviated form. 
//console.log(abbrev (“Nazar Babii")) – should be “N.B.”
let str1_1 = "Vadym Polishchuk";
let string1 = str1_1.substring(0, 1);
let string2 = str1_1.substring(6, 7);
let resultArr1 = [string1];
let resultArr2 = [string2];
console.log(`${resultArr1}` + "." + `${resultArr2}` + "."); // Can't find info how to extract 0-position from both arrays. Resolved by subString.
//but why should we use arrays when the next console.log looks more simpliest?
console.log(string1 + "." + string2 + ".");




//console.log(arr[0]);
/*let repl = str1_1.replace("Vadym", "V" );
let repl2 = str1_1.replace("Polishchuk", "P");
console.log(repl[0] + "." + repl2[6] + "."); */


//4. Write a JavaScript function that accept two integers and display the larger.
twoInt = function(a, b) {
  if (a > b)
  console.log(a);
  else
  console.log(b);
}
twoInt(7, 54);
//5. Write a JavaScript function with conditional statement to sort three numbers.

let digits = [6, -3, 54]
digits.sort(function(a, b) {
    return a-b;
})
console.log(digits);


let dig1 = 6;
let dig2 = -3;
let dig3 = 54;

if (dig1 > dig2 && dig1 > dig3) {
    if (dig2 > dig3) {
        console.log(dig1 + ", " + dig2 +", " + dig3)
    } else {
        console.log(dig1 +", " + dig3 +", " + dig2)
    }
} else if (dig2 > dig1 && dig2 > dig3) {
    if (dig1 > dig3) {
        console.log(dig2 +", " + dig1 +", " + dig3)
    } else {
        console.log(dig2 +", " + dig3 +", " + dig1)
    }
} else if (dig3 > dig1 && dig3 > dig2) {
    if (dig1 > dig2) {
        console.log(dig3 + ", " + dig1 + ", " + dig2)
    } else {
        console.log(dig3 + ", " + dig2 + ", " + dig1)
    }
}
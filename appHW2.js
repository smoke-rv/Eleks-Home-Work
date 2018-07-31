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

//3. Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Nazar Babii")) – should be “N.B.”
let str1_1 = "Vadym Polishchuk";
let repl = str1_1.replace("Vadym", "V" );
let repl2 = str1_1.replace("Polishchuk", "P");
console.log(repl[0] + "." + repl2[6] + ".");

//4. Write a JavaScript function that accept two integers and display the larger.
twoInt = function(a, b) {
  if (a > b)
  console.log(a);
  else
  console.log(b);
}
twoInt(7, 54);
//5. Write a JavaScript function with conditional statement to sort three numbers.
let digits = [6, -3, -54]
digits.sort(function(a, b) {
    return a-b;
})
console.log(digits);
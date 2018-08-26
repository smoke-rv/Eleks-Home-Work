//Create js program which will provide you a string with a defined length
function string(){
  var randomstring = require("randomstring");
  return randomstring.generate(8);
};
console.log("String generated:" + string());
//Create js program which will provide you an integer with a defined length

function integer(){
  return Math.floor((Math.random()*100) + 1);
};
console.log("integer generated:" + integer());


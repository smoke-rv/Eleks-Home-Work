//Create a variable student and set ‘name’, ‘surname’ and ‘rate’ in json format


let student = {
    "name": "Vadym",
    "surname": "Polishchuk",
    "rate": 0
};

//Output ‘name’ value
console.log(student.name)

//Use JSON.stringify() method to make a JSON string
let convertToJSON = JSON.stringify(student);

//Change ‘rate’ value and output it
let student2 = JSON.parse(convertToJSON);
student2.rate = 8;

console.log(student2.rate)
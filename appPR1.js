/* 1.Write a JavaScript program to break an address of an url and put it's part into an array.
URL structure : ://.org[/] and there may be no part in the address
https://eleks.com/services/quality-assurance-and-testing-services/ */

let urlString = "https://eleks.com/services/quality-assurance-and-testing-services/";
let resultArr = [];

resultArr.push(urlString.slice(0, urlString.indexOf("://")));
//console.log(urlString.split("/"));

for(let i = 2; i < 5; i++)
    resultArr.push(urlString.split("/")[i]);

console.log(`${resultArr}`);


/* 2. Write few figures' objects (circle, triangle, square). Create function to calculate area of
each figure (one function should handle all objects). Sort objects by area */

// s=P*r*r
let circle = {
    type: "circle",
    radius: 10,
};

// s=0.5*(a*b)
let triangle = {
    type: "triangle",
    sideA: 5,
    sideB: 3,
};

// s=a*b
let square = {
    type: "square",
    side1: 10,
};

function calcArea(figure) {
    switch (figure.type) {
        case "circle":
            //return Math.PI * figure.radius * figure.radius
            return (Math.PI * Math.pow(figure.radius, 2)).toFixed(2); //піднесення в квадрат + округлення до 2 знаків після коми
            break;
        case "triangle":
            return 0.5 * (figure.sideA * figure.sideB);
            break;
        case "square":
            return figure.side1 * figure.side1;
            break;
        default:
            return "wrong figure";
    }
}

console.log(calcArea(circle));
console.log(calcArea(triangle));
console.log(calcArea(square));
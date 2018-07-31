//1. Write a JavaScript function to get the last element of an array
let OS = ["Windows", "MacOS", "Unix", "Linux"];
let lastOS = OS.pop();
console.log(lastOS);

//2. Write a simple JavaScript program to join all elements of the following array into a string
let mobileOS = ["Windows Phone", "IOS", "Android", "Symbian"];
console.log(mobileOS.join());

//3. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let sum = [];
for(let i = 0; i < arr1.length; i++){
    sum[i] = arr1[i] + arr2[i];
}
console.log("sum of arrays = " + sum);

//4. Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();
let rectangle = {
    length: 10,
    width: 30,
    area: function() {return this.length * this.width;},
    perimeter: function() {return (this.length + this.width) * 2;}
}
console.log(`Area = ${rectangle.area()}`);
console.log(`Perimeter = ${rectangle.perimeter()}`)
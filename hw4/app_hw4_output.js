let vehicle = require('./hw4_vehicle.js');
let car = require('./hw4_car.js');
let truck = require('./hw4_truck');

let VW = new car("Polo", 2016, 210);
VW.displayInfo();
VW.transportPeople();

let Mercedes = new truck("Actros", 2017, 140);
Mercedes.displayInfo();
Mercedes.transportContainer();

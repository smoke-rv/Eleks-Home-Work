let vehicle = require('./hw4_vehicle');
class car extends vehicle {
    constructor(carModel, carYear, carSpeed) {
        super(carModel, carYear, carSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I'm starting transporting passengers`);
    }
}

module.exports = car;
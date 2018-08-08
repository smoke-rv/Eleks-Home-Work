let vehicle = require('./hw4_vehicle');
class truck extends vehicle {
    constructor(carModel, carYear, carSpeed) {
        super(carModel, carYear, carSpeed);
        this.type = "Truck";
    }

    transportContainer() {
        console.log(`I'm starting transpotring heavy conmtainer`);
    }
    
}

module.exports = truck;
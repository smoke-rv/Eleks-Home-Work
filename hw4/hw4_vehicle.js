module.exports = class vehicle {
    constructor(carModel, carYear, carSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.speed = carSpeed;
    }

    displayInfo() {
        console.log(`Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.speed};
        Type: ${this.type};`);
    }

}

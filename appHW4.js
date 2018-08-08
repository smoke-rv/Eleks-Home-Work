/*1. Replicate code from slide 8, create instances of car and truck. Try to call different
methods for both, investigate output and explain why.*/

class vehicle {
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

class car extends vehicle {
    constructor(carModel, carYear, carSpeed) {
        super(carModel, carYear, carSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I'm starting transporting passengers`);
    }
}

class Truck extends vehicle {
    constructor(carModel, carYear, carSpeed) {
        super(carModel, carYear, carSpeed);
        this.type = "Truck";
    }

    transportContainer() {
        console.log(`I'm starting transpotring heavy conmtainer`);
    }
    
}


let Scania = new car("Polo", 2016, 210);
Scania.displayInfo();
Scania.transportPeople();

let Mercedes = new Truck("Actros", 2017, 140);
Mercedes.displayInfo();
Mercedes.transportContainer();




//2. Add static method to one class, try to call it and investigate output.

class vehicle1 {
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

class car1 extends vehicle1 {
    constructor(carModel, carYear, carSpeed) {
        super(carModel, carYear, carSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I'm starting transporting passengers`);
    }
}

class Truck1 extends vehicle1 {
    constructor(carModel, carYear, carSpeed) {
        super(carModel, carYear, carSpeed);
        this.type = "Truck";
    }

    transportContainer() {
        console.log(`I'm starting transpotring heavy conmtainer`);
    }
    static fireCar() {
       return new this("Fire Truck", 2018, 138)
    }
    
}


let scania = Truck1.fireCar();
scania.displayInfo();

/* let Mercedes = new Truck("Actros", 2017, 140);
Mercedes.displayInfo();
Mercedes.transportContainer(); */


//3. Call method of father’s class.



//4. Override method of father’s class.



//5. Move classes to separate files and import them into the app using require.
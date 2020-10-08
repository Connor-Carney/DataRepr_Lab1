class Vehicle {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    information() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
} // End of the Vehicle Class (Parent)

class Cars extends Vehicle {

    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    information() {
        super.information();
        console.log(`Doors: ${this.doors}`);
    }

} // End of the Child Class Cars

let myCar = new Cars('BMW', 'A7', 2017, 4);
myCar.information();

// Base Parent Class
class Vehicle {
    start() {
        console.log("Vehicle started.");
    }
}

// Intermediate Parent Class
class Car extends Vehicle {
    drive() {
        console.log("Car is driving.");
    }
}

// Child Class
class ElectricCar extends Car {
    charge() {
        console.log("Electric car is charging.");
    }
}

const myTesla = new ElectricCar();
myTesla.start();  // Output: Vehicle started.
myTesla.drive();  // Output: Car is driving.
myTesla.charge(); // Output: Electric car is charging.

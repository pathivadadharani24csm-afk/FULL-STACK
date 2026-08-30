// Base Class
class Person {
    constructor(name) {
        this.name = name;
    }
}

// Mixin 1 (Independent feature)
const CanFly = {
    fly() {
        console.log(`${this.name} is flying!`);
    }
};

// Mixin 2 (Independent feature)
const CanSwim = {
    fly() {
        console.log(`${this.name} is flyes!`);
    },
    swim() {
        console.log(`${this.name} is swimming!`);
    }
};

// Child Class
class Superhero extends Person {}

// Copy the methods of Mixins into the Superhero prototype
Object.assign(Superhero.prototype, CanFly, CanSwim);

const superman = new Superhero("Clark Kent");
superman.fly();  // Output: Clark Kent is flying!
superman.swim(); // Output: Clark Kent is swimming!


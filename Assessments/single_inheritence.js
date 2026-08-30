// Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Child Class
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const myDog = new Dog("Buddy");
myDog.eat();  // Output: Buddy is eating.
myDog.bark(); // Output: Buddy is barking.

// 1. Parent Class
class Employee {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`${this.name} is working.`);
    }
}

// 2. Multi-level Step: Intermediate Class
class Manager extends Employee {
    manage() {
        console.log(`${this.name} is managing a team.`);
    }
}

// 3. Multiple Step: Separate feature Mixin
const CanCode = {
    code() {
        console.log(`${this.name} is writing JavaScript.`);
    }
};

// 4. Hybrid Class: Combines Multi-level (extends) and Multiple (Mixin)
class TechManager extends Manager {}
Object.assign(TechManager.prototype, CanCode);

const alice = new TechManager("Alice");
alice.work();   // From Employee (Multi-level)
alice.manage(); // From Manager (Multi-level)
alice.code();   // From CanCode Mixin (Multiple)

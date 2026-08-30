// Single Parent Class
class Shape {
    constructor(color) {
        this.color = color;
    }
}

// Child Class 1
class Circle extends Shape {
    drawCircle() {
        console.log(`Drawing a ${this.color} circle.`);
    }
}

// Child Class 2
class Square extends Shape {
    drawSquare() {
        console.log(`Drawing a ${this.color} square.`);
    }
}

const circle = new Circle("red");
const square = new Square("blue");

circle.drawCircle(); // Output: Drawing a red circle.
square.drawSquare(); // Output: Drawing a blue square.

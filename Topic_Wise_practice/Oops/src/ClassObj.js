// The Blueprint (Class)
class Sneaker {
  constructor(brand, hypeLevel) {
    this.brand = brand;
    this.hypeLevel = hypeLevel;
  }
  
  flex() {
    console.log(`Flexing my ${this.brand}s. Hype level: ${this.hypeLevel}/10. 🥶`);
  }
}

// The Actual Thing (Object)
const myKicks = new Sneaker("Nike", 10);
const beaters = new Sneaker("Crocs", 3);

myKicks.flex(); 
beaters.flex();
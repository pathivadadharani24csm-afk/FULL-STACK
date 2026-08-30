// Abstract Class (Cannot be instantiated directly)
class SmartPhone {
  constructor() {
    if (this.constructor === SmartPhone) {
      throw new Error("Bruh, you can't buy a generic 'SmartPhone'. Pick a brand.");
    }
  }

  // Abstract method (Must be implemented by child)
  takeSelfie() {
    throw new Error("You have to write the takeSelfie method in the child class!");
  }
}

class IPhone extends SmartPhone {
  takeSelfie() {
    console.log("Taking that 0.5x ultra-wide mirror selfie. 📸");
  }
}

// const fakePhone = new SmartPhone(); // ❌ This will throw an error!

const myPhone = new IPhone();
myPhone.takeSelfie(); // ✅ Works perfectly
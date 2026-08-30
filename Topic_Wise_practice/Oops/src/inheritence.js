// Parent Class
class Gamer {
  constructor(username) {
    this.username = username;
  }
  
  rageQuit() {
    console.log(`${this.username} disconnected. Their "WiFi died". 🤡`);
  }
}

// Child Class inheriting from Gamer
class Streamer extends Gamer {
  askForDonos() {
    console.log(`${this.username}: SMASH that subscribe button and drop some bits!`);
  }
}

const noobmaster = new Streamer("NoobMaster69");
noobmaster.askForDonos(); // Own method
noobmaster.rageQuit();    // Inherited from parent
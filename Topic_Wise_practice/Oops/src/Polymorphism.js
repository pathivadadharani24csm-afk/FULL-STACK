class Notification {
  alert() {
    console.log("You have a notification.");
  }
}

class InstaDM extends Notification {
  // Overriding the parent's method
  alert() {
    console.log("Slide into DMs: 👀");
  }
}

class SlackMessage extends Notification {
  // Overriding the parent's method
  alert() {
    console.log("Boss is typing... 💀");
  }
}

const weekend = new InstaDM();
const monday = new SlackMessage();

// Same method name, totally different energy
weekend.alert(); 
monday.alert();
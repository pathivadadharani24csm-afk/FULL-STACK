// 1. Doxxing your own files (__dirname & __filename)
console.log("My folder lives at:", __dirname);
console.log("My exact file path is:", __filename);

// 2. Playing with Time (setTimeout & setInterval)
console.log("Wait for it...");
setTimeout(() => {
  console.log("Boom! 2 seconds later.");
}, 2000);

let count = 0;
// setInterval runs repeatedly on a loop
const spamTimer = setInterval(() => {
  count++;
  console.log(`Spamming the chat... x${count}`);
  if (count === 3) {
    clearInterval(spamTimer); // Gotta stop it or it runs forever, big yikes
    console.log("Okay, I'll stop spamming.");
  }
}, 1000);

// 3. Spilling system tea (process)
console.log("I am running Node version:", process.version);

// 4. Decoding the matrix (Buffer)
// Buffer is how Node handles raw binary data (like images, video, or files)
const myBuffer = Buffer.from("Node.js is bussin", "utf-8");
console.log("Buffer raw hex data:", myBuffer); 
console.log("Buffer translated back to text:", myBuffer.toString());

// 5. The final boss (global)
// 'global' is the actual container holding ALL of these other objects. 
// You can attach your own stuff to it, but don't overdo it or your code gets messy.
global.myToxicTrait = "Forgetting to save before running code";
console.log("My custom global variable:", global.myToxicTrait);
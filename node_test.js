console.log("Hello World!");

//Promise testing
const inventory = {
  sunglasses: 9210,
  pants: 1088,
  bags: 1344,
};

function myExecutor(resolve, reject) {
  if (inventory.sunglasses > 10) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
}

function orderSunglasses() {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise);

//More Promise Testing
const age = 20;

function areYou18(resolve, reject) {
  if (age > 18) {
    resolve("Welcome");
  } else {
    reject("Not Welcome");
  }
}

function getAge() {
  return new Promise(areYou18);
}

const canYouEnter = getAge();

console.log(canYouEnter);

//Even More Promise Testing
const color = "red";

function getColor(resolve, reject) {
  if (color === "red") {
    resolve("You have picked red");
  } else {
    reject("You did not pick red");
  }
}

function colorPicker() {
  return new Promise(getColor);
}

const properColor = colorPicker();

console.log(properColor);

//Timeout Test
function delayedHello() {
  console.log("This is a delayed hello");
}
setTimeout(delayedHello, 2000);

//Promise-Timeout Test
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
function usingSTO() {
  console.log("This is a string!");
}

setTimeout(usingSTO, 2800);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

//Success Callback
const prom = new Promise((resolve, reject) => {
  resolve("Yay!");
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints: 'Yay!'

//Success Callback Testing
function promTesting(resolve, reject) {
  resolve("Yes");
}

function bigTesting() {
  return new Promise(promTesting);
}

console.log(bigTesting());

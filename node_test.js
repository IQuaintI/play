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

//Timeout Test
function delayedHello() {
  console.log("This is a delayed hello");
}
setTimeout(delayedHello, 2000);

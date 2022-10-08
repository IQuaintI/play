console.log("Hello!");

//Array Testing
const colorArray = ["red", "green", "blue", "yellow"];
console.log(colorArray);
console.table(colorArray);
console.assert(colorArray.length > 5);

//The Process Module
let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`);
console.log(initialMemory);

//The OS Module
const os = require("os");

const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime(),
  network: os.networkInterfaces(),
};

console.log(server);

//The Util Module
const util = require("util");

const today = new Date();
const earthDay = "April 22 2022";

console.log(util.types.isDate(today));
console.log(util.types.isDate(earthDay));

function house() {
  "red";
}
console.log(util.types.ishouse());

console.log(Date());

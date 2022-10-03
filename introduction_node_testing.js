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

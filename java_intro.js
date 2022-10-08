//Array Mutation Test
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

function numbersArr(arr) {
  arr[3] = 5;
}
numbersArr(numbers);
console.log(numbers);

//Nested Array
const arrayNest = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.table(arrayNest);

console.log(arrayNest[1][1]);

//The For Loop
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

for (let index = "Hats"; index < index.length; index++) {
  console.log(index);
}

//Reverse Loop
for (let index = 5; index >= 0; index--) {
  console.log(index);
} //The = sign allows for the number to no longer be exclusive

//Loop Through Arrays
const colors = ["red", "blue", "green", "yellow", "purple"];
for (let index = 0; index < colors.length; index++) {
  console.log(colors[index]);
}

//Nested Loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log("Both arrays have the number: " + yourArray[j]);
    }
  }
}

const arrayOne = ["red", "blue", "green", "yellow", "orange"];
const arrayTwo = ["house", "tree", "bee", "red"];
for (let index = 0; index < arrayOne.length; index++) {
  for (let j = 0; j < arrayTwo.length; j++) {
    if (arrayOne[index] === arrayTwo[j]) {
      console.log("Both arrays share: " + arrayTwo[j]);
    }
  }
}
/*
let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
let tinasFollowers = ["Sam", "Marta", "Elle"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
    console.log("You share: " + mutualFollowers);
  }
} */

//While Loop
for (let index = 0; index < 5; index++) {
  console.log(index);
}

let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}

//Do..While
let countString = "";
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

const firstMessage = "I will print!";
const secondMessage = "I will not print!";

//A Do..while that evaluates to false //Will print once
do {
  console.log(firstMessage);
} while (false);

// A while loop with a condition that is false //Will not print
while (false) {
  console.log(secondMessage);
}

//Another Do..while statement
let cupsOfSugarNeeded = 7;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(`${cupsAdded} cups were added`);
} while (cupsAdded < cupsOfSugarNeeded);

//break test
for (let i = 0; i < 99; i++) {
  if (i > 2) {
    break;
  }
  console.log("Banana.");
}

console.log("Orange you glad I broke out the loop!");
//

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know");
//

const animals = ["horse", "penguin", "ox", "bear", "dog"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
  if (animals[i] === "ox") {
    break;
  }
}

console.log("It's an Ox!");

//More for loop testing
const sports = ["soccer", "baseball", "basketball", "cricket", "swimming"];

for (let i = 0; i < sports.length; i++) {
  console.log(`I enjoy ${sports[i]}`);
}

//For...of loop
const furnitureArray = ["chair", "sofa", "drawer", "desk", "lamp"];

for (const furniture of furnitureArray) {
  console.log(`I need to buy ${furniture}`);
}

//For...of iterations
const fruitArray = ["oranges", "apples", "grapes"];

for (const fruit of fruitArray) {
  console.log(fruit);
}

//Iteraties through each letter
const username = "casper";

for (const char of username) {
  console.log(char);
}

//break test
const colorWheelTest = ["red", "blue", "green", "yellow", "orange"];

for (const colorWheel of colorWheelTest) {
  if (colorWheel === "green") {
    break;
  }
  console.log(colorWheel);
}

const strangeBirds = [
  "Shoebill",
  "Cockatrice",
  "Basan",
  "Terrorbird",
  "Parotia",
  "Kakapo",
];

for (const bird of strangeBirds) {
  if (bird === "Basan") {
    break;
  }
  console.log(bird);
}

//continue testing
for (const colorWheel of colorWheelTest) {
  if (colorWheel === "green") {
    continue;
  }
  console.log(colorWheel);
}

//Spelling wizard
const spellingWord = "hippopotamus";

for (const spelling of spellingWord) {
  console.log(spelling);
}

//

const pokemonList = ["Pikachu", "Charizard", "Squirtle", "Yoshi", "Snorlax"];

for (const pokemon of pokemonList) {
  if (pokemon === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${pokemon}`);
}

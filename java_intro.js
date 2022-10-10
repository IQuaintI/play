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

//Object literal
let spaceship = {
  "Fuel Type": "Diesel",
  color: "silver",
};

let spaceshipFuel = spaceship["Fuel Type"];

console.table(spaceship);
console.log(spaceship.color);
console.log(spaceship["Fuel Type"]);
console.log(spaceship.turtle);
console.log(spaceshipFuel);

//Bracket notation
console.log(["a", "b", "c", "d"][2]);

//Property Assignment
const numberWheels = {
  "Wheel One": [1, 2, 3, 4, 5],
  "Wheel Two": [6, 7, 8, 9, 10],
  "Wheel Three": [11, 12, 13, 14, 15],
};
console.log(numberWheels["Wheel One"].join(" "));

console.log(numberWheels["Wheel Two"].join(" "));

delete numberWheels["Wheel Three"];

console.table(numberWheels);

console.log(numberWheels["Wheel Three"]); //Logs unrefined since delete

//Method testing
const alienShip = {
  invade: function () {
    console.log("Hello! We have come to take.");
  },
};

alienShip.invade();

//Objects in objects
const seaShip = {
  dimensions: {
    height: "Long",
    width: "Big Long",
    weight: "1000 tons",
    modelNum: "34-ZJ-97XR",
    weapons: "Twin Zeiter Function with Anti-Dispersal Probabilities",
    armor: "12th Generation Woven Shaets with Acoustic Deferments",
  },
  crew: {
    crewSize: 400,
    crewCritical: {
      captainName: "One",
      speciality: "Communes with Her Waters ",
      seekDirection() {
        console.log(
          "It is only in the persistant adoration by our Lady that we can see through the Voll. -The 4th Movement"
        );
      },
      subCaptainName: "Two",
      speciality: "Watches for The Brackish Misericordia",
      seekMercy() {
        console.log(
          "The Brakish are not the only to denounce Her but they are the most persistant. - Perta the Many-Sunken"
        );
      },
      oratorName: "Speaks",
      speciality: "Breaks the Silence",
      seekWords() {
        console.log("How does one break a sound?");
      },
    },
  },
};

console.table(seaShip.dimensions);
console.table(seaShip.dimensions.armor);
console.log(seaShip.crew);
console.log(seaShip.crew.seekDirection);

//let capFave = spaceship.crew.captain["favorite foods"][0]; Just an insert about

//Pass By Reference
const horse = {
  color: "brown",
  height: "5 hands",
  weight: "400 stones",
};

console.table(horse);

function colorChange(horse) {
  horse.color = "gold";
}

colorChange(horse);

console.table(horse);

//

const traveler = {
  homePlanet: "Earth",
  color: "silver",
};

/*let paintIt = (obj) => {
  obj.color = "glorious gold";
}; */

function paintIt(obj) {
  obj.color = "glorious gold";
}

paintIt(traveler);

console.log(traveler.color); // Returns 'glorious gold'

//

const travelers = {
  homePlanet: "Earth",
  color: "silver",
};

console.log(travelers);

function paintIt(obj) {
  (obj.color = "gold"), (obj.homePlanet = "neptune");
}

paintIt(travelers);

console.log(travelers); // Returns 'glorious gold'

//For...in
const inTest = { a: 1, b: 2, c: 3 };

for (const property in inTest) {
  console.log(`${property}: ${inTest[property]}`);
}

for (const property in seaShip.crew) {
  console.log(`${property}: ${seaShip.crew[property].crewCritical}`);
}

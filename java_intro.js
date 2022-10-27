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
seaShip.crew.crewCritical.seekMercy();

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

//Testing objects and changing objects

const banana = {
  color: "Yellow",
  dimensions: {
    height: "One banana tall",
    width: "One banana long",
  },
  price: {
    bulk: "$2/lb",
  },
};
console.log(banana.color);
function changeColor() {
  banana.color = "Green";
}
changeColor(banana);
console.log(banana.color);

//The For Loop
for (let index = 10; index >= 4; index--) {
  console.log(index);
}

for (let index = 9; index < 20; index++) {
  console.log(index);
}

//The for through index
for (let index = "Hats"; index < index.length; index++) {
  console.log(index);
}

for (let index = "Hats"; index < index.length; index++) {
  console.log(index);
}

for (let index = "words"; index < index.length; index++) {
  console.log(index);
}

const lengthTest = ["words", "houses", "pirate", "team"];
console.log(lengthTest);
console.log(lengthTest.length);

/*
 //Reverse Loop
for (let index = 5; index >= 0; index--) {
  console.log(index);
} //The = sign allows for the number to no longer be exclusive

//Loop Through Arrays
const colors = ["red", "blue", "green", "yellow", "purple"];
for (let index = 0; index < colors.length; index++) {
  console.log(colors[index]);
} 
*/

//Bios must be done in third person
//Perhaps go to the soldier of the month
//Why do soldier of the month?
//I hate this place

//For...of
const arrayThree = [1, 2, 3, 4, 5];

for (const threeArray in arrayThree) {
  console.log(threeArray);
}

//Advanced Objects

//this keyword
const cow = {
  dietType: "herbivore",
  makeSound() {
    console.log("mooo");
  },
  diet() {
    console.log(this.dietType);
  },
};

console.log(cow);
console.log(cow.dietType);
cow.makeSound();
cow.diet();

//Getters
const person = {
  _firstName: "John",
  _lastName: "Doe",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing first or last name";
    }
  },
};

console.log(person);
person.fullName;
console.log(person.fullName);
console.log(typeof person.fullName);

//Setters
const personSetter = {
  _age: 40,
  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("You must asign a number to age");
    }
  },
};

console.log(personSetter);

personSetter.age = 40;
console.log(personSetter._age);

//Factory Functions
function monsterFactory(name, age, energySource, catchPhrase) {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    },
  };
}

const beast = monsterFactory("Malice", 324, "Hate", "Show me your rage!");
console.log(beast);
beast.scare();

//Destructuring
function heroFactory(name, age, energySource, catchPhrase) {
  return {
    name,
    age,
    energySource,
    motto() {
      console.log(catchPhrase);
    },
  };
}

const fireHero = heroFactory("torch", 32, "fire", "Ignition!");
console.log(fireHero);
fireHero.motto();

//Destructured Assignment
const vampire = {
  name: "Alucard",
  residence: "Unknown",
  preferences: {
    day: "hide",
    night: "hunt",
    motto() {
      "I come!";
    },
  },
};

//const residence = vampire.residence;
const { preferences } = vampire;
console.log(preferences);

preferences.motto;

//Object Keys
console.log(Object.keys(vampire));
console.log(Object.keys(vampire.preferences));
console.log(Object.entries(vampire));

const newVampire = Object.entries(
  { color: "blue", power: "big", name: "olliver" },
  vampire
);

console.log(newVampire);

//More for testing
const car = {
  numDoors: 4,
  isDirty: true,
  color: "red",
};

for (let key in car) {
  console.log(key);
}

//Functions as data
function thisIsALongFunctionOnPurpose() {
  console.log("Yeah on purpose");
}

thisIsALongFunctionOnPurpose();

const shortHand = thisIsALongFunctionOnPurpose;
shortHand();
console.log(shortHand.name);

//Functions as parameters
function addTwo(num) {
  return num + 2;
}

console.log(addTwo(3));

/*
function checkConsistentOutput(func, val) {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return func(val);
  } else {
    ("inconsistent results");
  }
}

checkConsistentOutput();
*/

//Iterators
function plusTen(num) {
  return num + 5;
}
let f = plusTen;

console.log(plusTen(4));
console.log(f(5));

//Callbacks functions
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(1));

function printMsg(evenFunc, num) {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}`);
}

printMsg(isEven, 5);

//forEach() iterator
const fruits = ["mango", "apple", "pineapple", "peach"];

function printFruits(fruits) {
  console.log(`I want to eat ${fruits}`);
}

fruits.forEach(printFruits);

//forEach() iterator extra
const groceries = ["brown sugar", "hat", "tiolet paper", "sodas"];
groceries.forEach(function (groceryItem) {
  console.log(`I need to buy${groceryItem}`);
});

//map() method
const bigNums = [1, 2, 3, 4, 5].map(function (number) {
  return number * 10;
});

console.log(bigNums);

const birds = ["raven", "crow", "pigeon", "albatross", "parrot"];

const secretMessage = birds.map((bird) => bird[1]);

console.log(secretMessage.join(" "));

//filter() method
const words = ["chair", "music", "pillow", "brick", "pen", "door"];

const shortWords = words.filter(function (word) {
  if (word.length < 6) {
    return true;
  }
});

console.log(shortWords);

//findIndex() method
const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(function (num) {
  if (num < 10) {
    return true;
  }
});

console.log(lessThanTen);
/*The output is 3 because it is counting the indecies so the 
  answer would be 5 since it is the first number below 10
*/

/*
const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex(function (animal) {
  if (animal === "elephant") {
    return true;
  }
});

const startsWithS = animals.findIndex(function (sAnimal) {
  if (sAnimal[0] === "s") {
    return true;
  }
});
*/

//The .reduce() method

const reduceNumbers = [1, 2, 3, 4, 5];

const summedNums = reduceNumbers.reduce(function (
  accumulator,
  currentValue
) {});

/*
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);
 */

//The some() method  //Checks if at least one element in the array passes the test provided by the function
const someArray = [1, 3, 3, 3, 5];

//checks if the element is even
function even(element) {
  if (element % 2 === 0) {
    return true;
  }
}

console.log(someArray.some(even)); //outputs true

//The every() method
const everyArray = [1, 2, 3, 4, 5];

function every(element) {
  if (element < 6) {
    return true;
  }
}

console.log(everyArray.every(every));

//Error Test
const GPA_BENCHMARK = 3.5;
let students = [
  1,
  {
    name: "Egill Vignission",
    gpa: 3.4,
  },
  2,
  {
    name: "Bianca Pargas",
    gpa: 3.8,
  },
  3,
  {
    name: "Aisling O'Sullivan",
    gpa: 3.4,
  },
  4,
  {
    name: "Sameer Fares",
    gpa: 3.9,
  },
];

let honorRoll = students.filter(function (grade) {
  if (grade.gpa >= GPA_BENCHMARK) {
    return true;
  }
});

console.log(honorRoll);

//Free response error test
let instrument = "violin";
function setInstrument(instr) {
  let instrument = instr;
}
console.log(instrument);

//Run through this later
function capitalizeASingleWord(word) {
  console.log(word);

  if (word.match(" ")) {
    console.log("Word value inside of if statement: " + word);
    return null;
  }

  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);

  firstLetter = firstLetter.toUpperCase();

  return firstLetter + restOfWord;
}

/* // Should return "Hey"
console.log(
  "capitalizeASingleWord('hey') returns: " + capitalizeASingleWord("hey")
);

// Should return null
console.log(
  "capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord("hey ho")
);
*/

//match
let text = "there is a house in new orleans";
console.log(text.match("lean"));

//charAt()
let textChar = " there is a house in new orleans ";
const indexChar = 4;
console.log(
  `the character at index ${indexChar} is ${textChar.charAt(indexChar)}`
);

//Debugging with console.log
// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
/*
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(1);
  const firstLetter2 = string2.charAt(1);

  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 > firstLetter2) {
    return string2;
  } else {
    return string1;
  }
}


// Should return "blueberry"
console.log(
  "getLaterFirstLetter('avocado', 'blueberry') returns: " +
    getLaterFirstLetter("avocado", "blueberry")
);

// Should return "zebra"
console.log(
  "getLaterFirstLetter('zebra', 'aardvark') returns : " +
    getLaterFirstLetter("zebra", "aardvark")
);

// Should return null
console.log(
  "getLaterFirstLetter('astro', 'afar') returns: " +
    getLaterFirstLetter("astro", "afar")
);
*/

//testing
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);

  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 > firstLetter2) {
    return string1;
  } else {
    return string2;
  }
}

// Should return "blueberry"
console.log(
  //"getLaterFirstLetter('avocado', 'blueberry') returns: " +
  getLaterFirstLetter("avocado", "blueberry")
);

// Should return "zebra"
console.log(
  "getLaterFirstLetter('zebra', 'aardvark') returns : " +
    getLaterFirstLetter("zebra", "aardvark")
);

function letterTest(stringA, stringB) {
  const oneLetter = stringA.charAt(0);
  const twoLetter = stringB.charAt(0);

  if (oneLetter === twoLetter) {
    return null;
  } else if (oneLetter > twoLetter) {
    return stringA;
  } else {
    return stringB;
  }
}

console.log(`letterTest return ${letterTest("apple", "avocado")}`);
console.log(`letterTest return ${letterTest("apple", "banana")}`);
console.log(`letterTest return ${letterTest("cucumber", "avocado")}`);

//repeat() testing
function doubleString(string) {
  return string.repeat(2);
}

console.log(doubleString("hat "));

//documentation testing
function containsCake(string) {
  if (string.match("cake")) {
    return true;
  } else {
    return false;
  }
}
let cakeTest = "this sentence contains cake";
console.log(containsCake(cakeTest));

//string min/max testing
/* function isStringPerfectLength(string, minLength, maxLength {
  const stringLength = string.length;
  
  if (stringLenth > minLength) {
    return false;
  } else if (stringLenth < maxLength) {
    return false;
  } else {
    return true;
  }
} */

function testStringLength(string, minLength, maxLength) {
  const stringLength = string.length;

  if (stringLength < minLength) {
    return false;
  } else if (stringLength > maxLength) {
    return false;
  } else {
    return true;
  }
}

console.log(testStringLength("pare", 3, 5));

//reverseArray() - reverse method
/*function reverseArray(string) {
  return string.reverse();
}

let sentenceReverse = ["I", "do", "not", "want", "to", "go"];

console.log(reverseArray(sentenceReverse));

let a = [3, 2, 1];
console.log(a.reverse());

let arrayTest = ["one", "two", "three"];
console.log(arrayTest.reverse());
*/

//reverseArray() - non-reverse method
/* et arrayTest = ["one", "two", "three"];

let newArrayTest = "";

function reverseArray(array) {
  for (let i = newArrayTest.length - 1; i >= 0; i--) {
    newArrayTest += arrayTest[i];
  }
}

console.log(reverseArray(newArrayTest)); */

//Reversing array without reverse()
let array1 = ["one", "two", "three", "four", "five"];
function reverseArray1(array) {
  let newReverseArray = [];
  for (let i = 0; i < array.length; i++) {
    newReverseArray[i] = array[array.length - i - 1];
  }
  return newReverseArray;
}

console.log(reverseArray1(array1));

//greetAliens()
let aliens = ["One", "Two", "Three", "Four"];

//greetAliens using the forEach method
/*
aliens.forEach(function (alienGreeting) {
  console.log(`I greet you ${alienGreeting}`);
});
*/

function greetAliens(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(`We greet you ${array[index]}!`);
  }
}

greetAliens(aliens);

//convertToBaby()
const babyAnimals = ["panda", "turtle", "giraffe", "hippo"];

function makeBabyAnimalList(array) {
  const babyArray = [];
  for (let index = 0; index < array.length; index++) {
    babyArray.push("baby " + array[1]);
  }
  return babyArray;
}

console.log(makeBabyAnimalList(babyAnimals));

/* map() test
const getBabyAnimalList = babyAnimals.map(function (member) {
  return member + ` are here to play`;
});
console.log(getBabyAnimalList);
*/

//Fix the broken code!  //CHange i to another letter in 'inner loop'
/* const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    i = 1;
    while (i < number) {
      i = i * 2;
    }
    results.push(i);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8] */

//decline() and accept()
const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

//THIS IS NOT ACCEPTED BY THE PROGRAM
/*function declineEverything(array) {
  array.forEach(function (veg) {
    politelyDecline(veg);
  });
}

declineEverything(veggies);
*/

//Hopefully this one will - direct influence on politelyDecline
function declineEverything(array) {
  array.forEach(politelyDecline);
}
declineEverything(veggies);

//Worked but is not being accepted
/*veggies.forEach(function (vegAccept) {
  console.log(`Ok, I guess I will eat some ${vegAccept}`);
}); */

function acceptEverything(array) {
  array.forEach(function (everything) {
    console.log(`Ok, I guess I will eat some ${everything}`);
  });
}
acceptEverything(veggies);

//squareNums()
const numbersToSquare = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;
/* function toSquare(num) {
  num * num;
} */

const squareNums = (arr) => arr.map(toSquare);
/*function squareNums(arr) {
  arr.map(toSquare);
}*/

console.log(squareNums(numbersToSquare));

/*
// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
}
*/
//Adds to 55 1 - 10
let max = 0,
  count = 1;
while (count <= 10) {
  max += count;
  count += 1;
}
console.log(max);

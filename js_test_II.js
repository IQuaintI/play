const list = ["one", "two", "three", "four"];
console.table(list);

//Pop Test
const popTest = ["one", "two", "three"];
console.log(popTest);

const removed = popTest.pop();
console.log(removed);

//Slice Test
const sliceTest = [1, 2, 3, 4, 5, 6];
console.log(sliceTest);

const testSlice = sliceTest.slice(2 - 5);
console.log(testSlice);

//IndexOf Test
const numbers = [1, 2, 3, 4, 5, 6];
const numbersIndex = numbers.indexOf(3);
console.log(numbersIndex);

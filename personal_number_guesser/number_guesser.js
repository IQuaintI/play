function guessNumber() {
  //Generates random whole number
  let randomNum = Math.floor(Math.random() * 51);

  //Output to console for debugging
  console.log(randomNum);

  //Declare a variable
  let guess;
  guess = prompt("Please enter a number between 0 and 50");

  //console.log(`Your guess is ${guess}`);

  if (guess < randomNum) {
    window.alert("Your guess is to low");
  } else if (guess > randomNum) {
    window.alert("Your guess is to high");
  } else if (guess == randomNum) {
    window.alert("Perfect");
  } else {
    window.alert("Error");
  }
}

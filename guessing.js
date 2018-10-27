var answer = 7;

var stringGuess = prompt("Guess a number!");

var guess = Number(stringGuess);

if (guess == answer) {
	alert("Wow! You guessed it right!");
}

else if (guess > answer) {
	alert("Too high, try again");
}

else {
	alert("Too low, try again");
}
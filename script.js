var age = prompt("What is your age?");

if (isNaN(age)) {
	alert("Please enter a number");
}

if (age < 18) {
	alert("Sorry, you can not enter");
}

else if (age < 21) {
	alert("Welcome, but you can not drink here");
}

else {
	alert("Welcome, enjoy your stay");
}

if (age == 21) {
	alert("Happy 21st birthday");
}
if (age === '21') {
	alert("Happy 21st birthday honey");
}

if (age < 0) {
	alert("Come back when you are out of your mother's womb");
}

if (age % 2 == 1) {
	alert("Your age is odd")
}

if (age % Math.sqrt(age) === 0 ){
	alert("Your age is a perfect square")
}
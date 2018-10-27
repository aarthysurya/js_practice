var input = prompt("Enter Number");

var factorial = 1;
for(var i=input;i>0;i--) {
	factorial = factorial * i;
}

alert(factorial);
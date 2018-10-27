var todos =[ "Buy new turtle"];

var input = prompt("What would you like to do?");
while (input !== "quit"){
	if (input === "new"){
		newTodo();
	}if (input === "list"){
		listTodo();
	}if (input === "delete"){
		deleteTodo();
	}
input=prompt("What would you like to do?");
}
console.log("Ok,You quit the app");

function newTodo(){
	var newTodo = prompt ("Enter new to do")
	todos.push(newTodo);
	console.log("New to do added");
}

function listTodo(){
	todos.forEach(function(todo,i){
		console.log("i" + ": " + "todo")
	});
}

function deleteTodo(){
	var index=prompt("What is the index of the item to be deleted?")
	todos.splice(index,i)
	console.log("To do deleted");
}
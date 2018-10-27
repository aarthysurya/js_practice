var todos =["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input !=="quit"){

	if (input === "list") {
		listTodos();
	} else if(input === "new"){
		newTodo();
	} else if (input === "delete") {
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}
console.log("Ok, You quit the app")

function listTodos(){
	console.log("**********")
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("**********")
}

function newTodo(){
	var newToDo = prompt("Add a new to do")
			todos.push(newToDo);
			console.log("Added New todo");
}

function deleteTodo(){
	var index = prompt("What is the index of item to be deleted?");
	todos.splice(index,1);
	console.log("Todo deleted")
}
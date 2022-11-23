var addTodoButton = document.getElementById('addTodo');
var ToDocontainer = document.getElementById('ToDocontainer');
var inputField = document.getElementById('inputField');

addTodo.onclick = function(){
	//verifier si l'input n'est pas vide
	if (inputField.value!=''){
		// si l'input n'est ps vide , creer un paragraphe
		var paragraph = document.createElement('p')
	}
	//valoriser ce paragraphe avec le contenu de l'input
	paragraph.innerText = inputField.value;

	//stylise le paragraph 
	paragraph.classList.add('paragraphe_style')

	//inserer le paragraph dans l'element toDocontainer
	ToDocontainer.appendChild(paragraph);

	inputField.value = '';
}
addTodo.onclick();
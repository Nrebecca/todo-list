var input = document.querySelector("#todo-input");
var btn = document.querySelector("#btn");
var todoListWrapper = document.querySelector(".todoList");

function deleteItem(a) {
  a.parentNode.remove();
}

function addNewItem() {
  todoListWrapper.innerHTML += `<li> ${input.value} <button onclic="deleteItem(this)">Delete</button></li>`;
  input.value = "";
}

btn.addEventListener("click", addNewItem);

import todoData, { todosWrapperElement } from "./helper.js";
import { handleDeleteTodo } from "./eventHandler.js";

export function appendTodoDeleteButton(li, index) {
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", (event) => handleDeleteTodo(event, index));
  li.appendChild(button);
}

export default function renderTodos() {
  todoData.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerText = todo.title;
    appendTodoDeleteButton(li, index);
    todosWrapperElement.appendChild(li);
  });
}

// JS is exporting an object
// {renderTodos: renderTodos}

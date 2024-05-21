import todoData, { todosWrapperElement as todoWraperEle } from "./helper.js";
import { appendTodoDeleteButton } from "./ui.js";

function handleAddTodoSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get("addTodoInput");
  todoData.push({
    title,
  });

  const li = document.createElement("li");
  li.classList.add("test-class-dynamic");
  li.innerText = title;
  todoWraperEle.appendChild(li);

  appendTodoDeleteButton(li, todoData.length - 1);

  event.target.reset();
  localStorage.setItem("todo-data", JSON.stringify(todoData));
}

export function handleDeleteTodo(event, index) {
  const deletedListItem = event.target.parentElement;
  todoData.splice(index, 1);
  todoWraperEle.removeChild(deletedListItem);
  localStorage.setItem("todo-data", JSON.stringify(todoData));
}

// JS is exporting an object
// {handleDeleteTodo: handleDeleteTodo, handleAddTodoSubmit:handleAddTodoSubmit}

window.handleAddTodoSubmit = handleAddTodoSubmit;

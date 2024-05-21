export const todosWrapperElement = document.getElementById("todosWrapper");
const todoData = JSON.parse(localStorage.getItem("todo-data")) || [];

export default todoData; // exported as todoData

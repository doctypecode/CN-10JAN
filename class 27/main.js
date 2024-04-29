// event.target - Target is from where the event has been triggered.
// event.preventDefault - Used to stop any kind of default behavior, for example in form submit the default behavior is to reload the page. So use this to prevent that


// Local Storage
const todoData = JSON.parse(localStorage.getItem('todo-data')) || [];


function handleAddTodoSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('addTodoInput');
    todoData.push({
        title
    })

    const todosWrapperElement = document.getElementById('todosWrapper')
    const li = document.createElement('li');
    li.innerText = title;
    todosWrapperElement.appendChild(li)

    const button = document.createElement('button');
    button.innerText = 'Delete'
    li.appendChild(button);

    event.target.reset()
    localStorage.setItem('todo-data', JSON.stringify(todoData))
}

function renderTodos(){
    const todosWrapperElement = document.getElementById('todosWrapper')
    todoData.forEach(todo => {
        const li = document.createElement('li');
        li.innerText = todo.title
        todosWrapperElement.appendChild(li)
    })
}

renderTodos();



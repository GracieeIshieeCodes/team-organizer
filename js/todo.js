// Load todos from localStorage on page load
window.addEventListener('load', function() {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoList = document.getElementById('todo-list');

    savedTodos.forEach(todo => {
        const todoItem = createTodoElement(todo.text, todo.checked);
        todoList.appendChild(todoItem);
    });
});

// Add Todo function
function addTodo() {
    const todoInput = document.getElementById('todo-input').value.trim();
    if (todoInput !== '') {
        const todoList = document.getElementById('todo-list');
        const todoItem = createTodoElement(todoInput, false);
        todoList.appendChild(todoItem);
        saveTodos(); // Save todos to localStorage
        document.getElementById('todo-input').value = '';
    }
}

// Create todo element
function createTodoElement(text, checked) {
    const todoList = document.getElementById('todo-list'); // Add this line
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = checked;
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            todoList.removeChild(todoItem);
            saveTodos(); // Save todos to localStorage
        }
    });
    const label = document.createElement('label');
    label.textContent = text;
    label.style.fontFamily = '"Poppins", sans-serif';
    label.style.fontWeight = '500';
    label.style.fontStyle = 'normal';
    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    return todoItem;
}

// Save todos to localStorage
function saveTodos() {
    const todoList = document.getElementById('todo-list');
    const todos = Array.from(todoList.children).map(todo => {
        return {
            text: todo.querySelector('label').textContent,
            checked: todo.querySelector('input[type="checkbox"]').checked
        };
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Event listener for Add Todo button
document.getElementById('add-todo-btn').addEventListener('click', addTodo);

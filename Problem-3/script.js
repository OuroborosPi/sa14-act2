document.getElementById('addTodoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('newTodoTitle').value;
    const details = document.getElementById('newTodoDetails').value;
    addTodo(title, details);
    document.getElementById('newTodoTitle').value = '';
    document.getElementById('newTodoDetails').value = '';
});

function addTodo(title, details) {
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${title}</strong>
        <p>${details}</p>
        <button onclick="editTodo(this)">Edit</button>
        <button onclick="deleteTodo(this)">Delete</button>
    `;
    todoList.appendChild(li);
}

function deleteTodo(button) {
    const li = button.parentNode;
    li.remove();
}

function editTodo(button) {
    const li = button.parentNode;
    const title = prompt('Edit the title', li.children[0].textContent);
    const details = prompt('Edit the details', li.children[1].textContent);
    if (title !== null) {
        li.children[0].textContent = title;
    }
    if (details !== null) {
        li.children[1].textContent = details;
    }
}

let taskCount = 0;

function addTask() {
    const inputBox = document.getElementById('input-box');
    const taskText = inputBox.value.trim();

    if (taskText === '') return;

    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">✖</button>
    `;

    li.onclick = () => {
        li.classList.toggle('checked');
        updateTaskCount();
    };

    listContainer.appendChild(li);
    inputBox.value = '';
    updateTaskCount();
}

function deleteTask(button) {
    const li = button.parentNode;
    li.remove();
    updateTaskCount();
}

function clearTasks() {
    const listContainer = document.getElementById('list-container');
    const checkedTasks = listContainer.querySelectorAll('.checked');

    checkedTasks.forEach(task => task.remove());
    updateTaskCount();
}

function updateTaskCount() {
    const listContainer = document.getElementById('list-container');
    taskCount = listContainer.querySelectorAll('li').length;
    document.getElementById('task-count').textContent = `${taskCount} tasks remaining`;
}

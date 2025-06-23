function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const pendingTasks = document.getElementById('pendingTasks');

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete';
    completeButton.onclick = function() {
        completeTask(li);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        deleteTask(li);
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    pendingTasks.appendChild(li);

    taskInput.value = '';
}

function completeTask(taskElement) {
    const completedTasks = document.getElementById('completedTasks');
    taskElement.classList.add('completed');
    taskElement.removeChild(taskElement.querySelector('button.complete'));
    completedTasks.appendChild(taskElement);
}

function deleteTask(taskElement) {
    taskElement.remove();
}

// Additional Functionality: Edit Task
function editTask(taskElement) {
    const newTaskText = prompt("Edit your task:", taskElement.textContent);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskElement.textContent = newTaskText.trim();
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete';
        completeButton.onclick = function() {
            completeTask(taskElement);
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            deleteTask(taskElement);
        };

        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);
    }
}

// Adding Edit Button to each task
document.getElementById('pendingTasks').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        editTask(event.target);
    }
});